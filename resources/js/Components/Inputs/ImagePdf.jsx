export default function ImagePdf({ url }) {

    if (url && url.split('.').pop() === 'pdf' ) {
        return <a href={"/storage/" + url}>Ver PDF</a>
    }

    if (url){
        return (<img className={"mb-3 img-thumbnail"} alt="" src={"/storage/" + url} style={{maxHeight: 200}}/>)
    }
}
