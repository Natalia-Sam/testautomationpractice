_Playwright FrameWork:_

To setUp Framework:

1. _npm init_
2. _npm install @playwright/test_
3. create _.gitignore_
4. create _.env_ in the root and add there your variables(for example pass, email)
5. install lib for env : _npm install dotenv -D_
6. Open playwright.config.js and add there this import for envs _require('dotenv').config();_
7. Auth with request:

Difference Between _page.context()_ and _browser.newContext()_ in Playwright.
In Playwright, contexts are used to manage browser _states, cookies, and storage_.

const context = await browser.newContext(); _// Creates a new context_
const page = await context.newPage(); _// Creates a new page in that context_
console.log(page.context() === context); _// true, because the page belongs to that context_

--PAGE--
_page.context()_

1. Gets the existing context of a specific page.
2. Each page belongs to a context, and page.context() allows access to its settings (cookies, storage, etc.).
3. Does not create a new context, just retrieves the one that the page is already using.

--BROWSER--
_browser.newContext()_

1.  Creates a new isolated browser context.
2.  Each context has its own cookies, storage, and settings.
3.  Useful when testing multiple users/sessions in the same test.

                *page.context()*                                                     *browser.newContext()*

    _Purpose_ Retrieves the context of an existing page. Creates a completely new, isolated browser context.
    _Isolation_ No isolation, just access to the current context. Isolated storage, cookies, and sessions.
    _Use Case_ When you need to access context-related data from an existing page. When testing multiple users or separate browser sessions.
    _Cookies & Storage_ Shared across pages in the same context. Not shared, each context has its own storage.

await page.request.post('https://news.ycombinator.com/login', {
headers: {'content-type': 'application/x-www-form-urlencoded'},
form: {
acct: 'LanaM',
pw: 'X?69DDc\_.kcx%yz'
}
})

const cookies = await page.context().cookies();

_Cookies:_
[
{
name: 'user',
value: 'LanaM&N4su8m6wfsk9L4TD7woDGTVVd1Zf5RAf',
domain: 'news.ycombinator.com',
path: '/',
expires: 1774846939.511399,
httpOnly: true,
secure: true,
sameSite: 'Lax'
}
]

Options for sameSite Attribute:
_Strict_ – Cookie is sent only with requests from the same site.
_Lax (default)_ – Cookie is sent with same-site requests and some cross-site GET requests.
_None_ – Cookie is sent with all requests, even across different sites (must also have Secure flag).

_export async function getCookies(page)_ {
const cookies = await page.context().cookies();
const headers = {};
for (const cookie of cookies) {
headers[cookie.name] = cookie.value;
}
return headers;
}

Example _function getAuthHeaders(headers)_ {
const { 'dr.token': authToken, 'dr.scrf-token': xsrfToken, \_csrf: csrfCookie } = headers;
return {
Authorization: `Bearer ${authToken}`,
'x-csrf-token': xsrfToken,
Cookie: `_csrf=${csrfCookie}`,
};
}

const startsWithA = words.filter(word => word.startsWith("A"));
