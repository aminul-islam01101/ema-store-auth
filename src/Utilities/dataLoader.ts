/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-throw-literal */
export default async function Loader() {
    const res = await fetch(`products.json`);
    if (res.status === 404) {
        throw new Response('Not Found', { status: 404 });
    }
    const rootLoader = await res.json();

    return rootLoader;
}
