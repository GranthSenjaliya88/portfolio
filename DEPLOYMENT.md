# Portfolio deployment

The public website is https://granthsenjaliya88.github.io/portfolio/.

## Publish a change

Commit the intended source changes to `main`, then push `main` to GitHub.
`npm run deploy` is a shortcut for `git push origin main`; it does not commit
uncommitted files. A local commit without a push cannot update GitHub Pages.

The **Build and deploy portfolio** workflow installs the lockfile dependencies,
builds the website, prerenders its HTML, checks SEO/assets/anchors, and publishes
the validated artifact. A failed build leaves the previous live website intact.
You can also rerun deployment from Actions using **Run workflow** on `main`.

Repository Pages uses **GitHub Actions** as its publishing source. The
`github-pages` deployment environment must allow `main`. The old `gh-pages`
branch is retained as history; pushing generated files there is no longer the
publishing workflow. No personal token is stored in Actions: deployment uses
GitHub's short-lived workflow token and OIDC.

## Confirm what is live

Check the workflow's build and deploy jobs for success, then open
https://granthsenjaliya88.github.io/portfolio/deployment.json.
Its `commit` must match the source commit you pushed. This metadata does not
alter the website's visual design. If a browser still displays an older version,
reload it after deployment finishes; compiled CSS and JS use hashed filenames.

## Google Search

Publishing updates the website at the same public URL. Google Search keeps its
own indexed copy and refreshes it after crawling. For substantial content
changes, inspect the homepage in the verified Search Console property, test the
live URL, and request indexing once. Repeated requests do not speed up crawling.
The existing Google verification tag, canonical URL, and sitemap must remain.
There is no Google indexing API for automatically submitting an ordinary
portfolio after every commit.

Contact email: `granthsenjaliya881@gmail.com`.

## Fixed deployment fault

The previous workflow only validated and uploaded a generic artifact. Publishing
required a separate local `gh-pages` command, so successful source commits did
not change the live website. The build is now connected to the official Pages
artifact and deployment actions, with deployment permissions scoped to its job.

References: [GitHub Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages),
[Google recrawl guidance](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).
