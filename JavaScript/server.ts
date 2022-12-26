import { Client } from "@notionhq/client";

const notion = new Client({
    auth: "secret_HORF73Hvw3Cg7kAH9ZvRGY6FaJ0GulrsuZa0WvJ2ObN"//process.env.NOTION_TOKEN,
});

// (async () => {
//     const listUsersResponse = await notion.users.list({})
//     console.log(listUsersResponse);
//   })();

(async () => {
    const listSearchResponse = (await notion.search({}))['results']
    // console.log(listSearchResposne);
    for (let i=0;i<listSearchResponse.length;i++) {
        if(listSearchResponse[i]["object"]==="database"){
            console.log(listSearchResponse[i]);
        }
    }
})();