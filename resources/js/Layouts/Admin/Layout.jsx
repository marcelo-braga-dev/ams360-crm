import AppBarMenu from "./AppBarMenu";
import Grid from '@mui/material/Unstable_Grid2';
import {Head} from '@inertiajs/inertia-react';
import {Button} from 'reactstrap';

export default function Layout({button, url, textButton, children, titlePage}) {
    function buttonHeader() {
        if (button) {
            return <Grid>
                <Button color="warning" href={url}>
                    {textButton}
                </Button>
            </Grid>
        }
    }

    return (
        <>
            <Head title={titlePage}></Head>
            <div className="min-h-screen bg-gray-100 mb-5">
                <AppBarMenu></AppBarMenu>

                <header className="bg-white shadow mb-4">
                    <div className="max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
                        <Grid container className={"px-md-5"} spacing={3} display="flex" justifyContent="space-between" alignItems="center">
                            <Grid>
                                <span className="font-semibold text-xl text-gray-800 leading-tight">
                                    {titlePage}
                                </span>
                            </Grid>
                            {buttonHeader()}
                        </Grid>
                    </div>
                </header>

                <main>{children}</main>
            </div>
        </>
    );
}
