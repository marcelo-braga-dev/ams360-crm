export default function ImagePdf({ url }) {

    if (url && url.split('.').pop() === 'pdf' ) {
        return <a href={"/storage/" + url}>Ver PDF</a>
    }

    if (url){
        return <img alt="" src={"/storage/" + url}/>
    }
}
