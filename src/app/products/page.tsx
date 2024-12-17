import type { Metadata } from "next";
import { Products } from "./Products";

export const metadata: Metadata = {
    title: "Products",

};

// const fetchData = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users', {
//         cache: "force-cache",
//         next: {
//             revalidate: 3600,
//         }
//     });
//     const data = await response.json()
//     return data;
// }

export default async function ProductsHost() {
    // const data = await fetchData();

    // if (!data) notFound();

    return (
        <div>
            <Products />
        </div>
    )
};