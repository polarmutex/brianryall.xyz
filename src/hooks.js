const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');
const os = require('os');
const RSS = require('rss')

/**
 * Hooks!
 *
 * Lifecycle hooks are the backbone of how you can have complete control over the output of your site.
 * Hooks are enforced via the hookInterface 'contract' defined here:
        https://github.com/Elderjs/elderjs/blob/master/src/hookInterface/hookInterface.ts
 *
 * If you read the hookInterface spec closely you'll see that each defined hook gets specific 'props' along with which of those props is 'mutable'.
 *
 * If you're a fan of 'pure' functions in JS, mutating props will probably set off alarm bells in your head. Fear not, instead of burying
 * what is mutating things deep in your application, you'll know it is probably in this file.
 *
 * Also, to help keep mutation predictable each 'hook' limits which 'props' can be manipulated and where.
 *
 */

const hooks = [
  // {
  //   hook: 'html',
  //   name: 'compressHtml',
  //   description: "Uses regex to compress html. This is a big no-no, but let's give it a whirl.",
  //   priority: 1, // last please :D
  //   run: async ({ htmlString }) => {
  //     // this function takes the 'htmlString' prop, compresses it with Regex, then returns it.
  //     return {
  //       htmlString: htmlString
  //         .replace(/[ \t]/gi, ' ')
  //         .replace(/[ \n]/gi, ' ')
  //         .replace(/[ ]{2,}/gi, ' ')
  //         .replace(/>\s+</gi, '><'),
  //     };
  //   },
  // },
  {
    hook: 'bootstrap',
    name: 'copyAssetsToPublic',
    description:
      'Copies ./assets/ to the "distDir" defined in the elder.config.js. This function helps support the live reload process.',
    run: ({ settings }) => {
      // note that this function doesn't manipulate any props or return anything.
      // It is just executed on the 'bootstrap' hook which runs once when Elder.js is starting.

      // copy assets folder to public destination
      glob.sync(path.resolve(settings.rootDir, './assets/**/*')).forEach((file) => {
        const parsed = path.parse(file);
        // Only write the file/folder structure if it has an extension
        if (parsed.ext && parsed.ext.length > 0) {
          const relativeToAssetsFolder = path.relative(path.join(settings.rootDir, './assets'), file);
          const outputPath = path.resolve(settings.distDir, relativeToAssetsFolder);
          fs.ensureDirSync(path.parse(outputPath).dir);
          fs.outputFileSync(outputPath, fs.readFileSync(file));
        }
      });
    },
  },

  // Below are some hooks to try and play with to get a better feel of what is possible.

  // {
  //   hook: 'data',
  //   name: 'addSomethingToData',
  //   description: 'Use this hook to add a key to the "data" object on the "home" route. ',
  //   priority: 50,
  //   run: async ({ request, data }) => {
  //     // when you uncomment this, check the homepage for a new box at the top.
  //     // IMPORTANT: If you want to add data to a specific route only, you should probably do it in your /route.js for that route.
  //     if (request.route === 'home') {
  //       return {
  //         data: {
  //           ...data,
  //           testingHooks: true,
  //         },
  //       };
  //     }
  //   },
  // },

  // {
  //   hook: 'bootstrap',
  //   name: 'populateDataForAllRequests',
  //   description:
  //     'The goal of this hook is to show you that you can get data from anywhere and add it to the data object.',
  //   priority: 50,
  //   run: async ({ data }) => {
  //     // when you uncomment this, check the homepage for a new box at the top.
  //     return {
  //       data: {
  //         ...data,
  //         testingHooks: true,
  //         // here we are using the 'os' node.js native, and passing in data on the number of CPUs
  //         cpus: os.cpus(),

  //         // NOTE: here we are polluting the global data object across all 'requests' because we are using the 'bootstrap' hook.
  //         // This is bad practice in this example because cpus is only used by Home.svelte, but it is illustrated to show how you could
  //         // add global data.

  //         // IMPORTANT: If you want to add data to a specific route only, you should probably do it in your /route.js for that route.
  //       },
  //     };
  //   },
  // },

    {
        hook: 'allRequests',
        name: 'makeRSS',
        priority: 50,
        description: 'Makes RSS file',
        run: async ({ settings, data }) => {
            if (!settings.build) return // dont build RSS during Dev
            const rssExportPath = path.resolve(
            settings.distDir,
            `rss.xml`
        )
        const authorName = 'swyx'
        const baseUrl = 'https://brianryall.xyz/'
        const rssFeedUrl = 'https://brianryall.xyz/rss.xml'
        const rssFaviconUrl = 'https://brianryall.xyz/favicon.png'
        const title = 'brianryall.xyz RSS Feed'
        const description = 'RSS Feed for brianryall.xyz'
        const feed_url = rssFeedUrl
        const site_url = baseUrl
        const image_url = rssFaviconUrl
        const docs = 'http://example.com/rss/docs.html'
        const managingEditor = authorName
        const webMaster = authorName
        const copyright = '2020 ' + authorName
        const language = 'en'
        const categories = ['Tech', 'Blog']
        const pubDate = new Date().toUTCString()
        const ttl = '60'

        const feed = new RSS({
            title,
            description,
            feed_url,
            site_url,
            image_url,
            docs,
            managingEditor,
            webMaster,
            copyright,
            language,
            categories,
            pubDate,
            ttl
        })

        let _data = [
            ...data.markdown.posts
        ].map(x => {
            if (x.date) x.effectiveDate = new Date(x.date)
            if (x.instances) x.effectiveDate = new Date(x.instances[0].date)
            return x
        }).sort((a, z) => z.effectiveDate - a.effectiveDate).slice(0, 100)

        // fs.writeFileSync('testrss.json', JSON.stringify(_data, null, 2))
        _data.forEach(item => {
            const slug = item.slug || (item.data ? item.data.slug : null)
            if (!slug) {
                console.log('missing slug: ', { baseUrl, item })
                return // early return
            }
            let itemDescription = 'No description'
            if (item.data) {
                itemDescription = item.data.description ||
                item.data.desc
            }
            else if (item.description || item.desc) {
                itemDescription = item.description || item.desc
            }
            if (item.data && item.data.url) {
            itemDescription += ` (External Link: <a href="${item.data.url}">${item.data.url}</a>)`
            }
            if (item.data && item.data.canonical) {
            itemDescription += ` (Canonical Link: <a href="${item.data.canonical}">${item.data.canonical}</a>)`
            }
            feed.item({
                title: item.title || item.data.title,
                url: baseUrl + slug,
                description: itemDescription,
                date: item.date || (item.data && item.data.date) || item.instances && item.instances[0].date,
                // todo: enclosure?
                //TODO - custom_elements: customElements(item)
            })
        })
        console.log('writing RSS file...')
        fs.writeFileSync(path.resolve(rssExportPath), feed.xml())
        console.log('writing RSS file... done')
    }
    }

  // If you'd like to see specific examples of how to do things that you think could help improve the template please create a GH issue.
];
module.exports = hooks;

function customElements(item) {
  const part1 = type => `<h1>${type}: ${item.title}</h1>`
  const rawPart = `<p><pre>${JSON.stringify(item, null, 2)}</pre></p>`
  let instancesPart = ``
  if (item.instances) {
    instancesPart = `<ul>`
    item.instances.forEach(inst => {
      let video = inst.video ? `[<a href="${inst.video}">video</a>]` : ``
      let slides = inst.slides ? `[<a href="${inst.slides}">slides</a>]` : ``
      let url = inst.url ? `[<a href="${inst.url}">url</a>]` : ``
      let github = inst.github ? `[<a href="${inst.github}">github</a>]` : ``
      instancesPart += `<li>${inst.date ? String(inst.date).slice(0, 10) : ''} @ ${inst.venue}: ${[video, slides, url, github].join(', ')}</li>`
    })
    instancesPart += `</ul>`
  }

  if (item.type === 'Talks') return [
    {
      'content:encoded': {
        _cdata: item.url ?
          `<a href="${item.url}">${part1("Talk")}</a>
          ${instancesPart}
          ${rawPart}`
          : `${part1("Talk")}
          ${instancesPart}
          ${rawPart}`
      }
    }
  ]
  if (item.type === 'Podcasts') return [
    {
      'content:encoded': {
        _cdata: item.url ?
          `<a href="${item.url}">${part1("Podcast")}</a>
          ${instancesPart}
          ${rawPart}`
          : `${part1("Podcast")}
          ${instancesPart}
          ${rawPart}`
      }
    }
  ]
  if (item.content) return [
    {
      'content:encoded': {
        _cdata: marked(item.content) // todo - reuse parsed html
      }
    }
  ]
}
