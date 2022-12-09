import AppBarMenu from "@/Layouts/Consultor/AppBarMenu";
import Grid from '@mui/material/Unstable_Grid2';
import {Head} from '@inertiajs/inertia-react';
import {Button} from 'reactstrap';

export default function Authenticated({button, url, textButton, children, titlePage}) {
    function buttonHeader() {
        if (button) {
            return <Grid>
                <Button color="primary" href={url}>
                    {textButton}
                </Button>
            </Grid>
        }
    }

    return (
        <>
            <Head title={titlePage}></Head>
            <div className="min-h-screen bg-gray-100 pb-8">
                <AppBarMenu></AppBarMenu>

                <header className="bg-white shadow mb-5">
                    <div className="max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
                        <Grid container spacing={3} display="flex" justifyContent="space-between" alignItems="center">
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
