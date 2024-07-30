// default export

    // default function
        // export default function (name){
        //     console.info(`Hello ${name}, from default export`);
        // }

    // default variable
        // export default name = "Lisandro Garnacho"           // nama variable tidak dapat diganti

    // default class
        // export default class{
        //     constructor(name){
        //         this.name = name
        //     }

        //     sayHi(){
        //         console.info(`Hi, He has name ${name}`);
        //     }
        // }

// export default dan named

    export const title = "Belajar JavaScript Module"
    const content = "Content Export Default dan Named"
    const author = "Eko Kurniawan Khannedy"

    export {content}
    export default author
