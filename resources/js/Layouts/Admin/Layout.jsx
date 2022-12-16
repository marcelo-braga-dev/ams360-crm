import AppBarMenu from "./AppBarMenu";
import Grid from '@mui/material/Unstable_Grid2';
import {Head} from '@inertiajs/inertia-react';
import {Button, Row, Col} from 'reactstrap';

import ModalsAllerts from "@/Components/Modals/AlertsModals";
import SubMenuNav from "@/Layouts/Admin/SubMenuNav";

export default function Layout({url, textButton, children, titlePage, subMenu}) {

    return (
        <>
            <Head><title>{titlePage}</title></Head>
            <ModalsAllerts></ModalsAllerts>

            <div className="min-h-screen bg-gray-100 mb-5">
                <AppBarMenu></AppBarMenu>

                <header className="bg-white shadow mb-4">
                    <div className="max-w-7xl py-3 px-4 sm:px-6 lg:px-8">
                        <Grid container className={"px-md-5"} spacing={3} display="flex" justifyContent="space-between"
                              alignItems="center">
                            <Grid>
                                <span className="font-semibold text-xl text-gray-800 leading-tight">
                                    {titlePage}
                                </span>
                            </Grid>

                            {subMenu && (
                                <Grid>
                                    <SubMenuNav buttons={subMenu}></SubMenuNav>
                                </Grid>)}

                            {url && (
                                <Grid>
                                    <Button color="warning" href={url}>
                                        {textButton}
                                    </Button>
                                </Grid>
                            )}
                        </Grid>
                    </div>
                </header>

                <main>{children}</main>
            </div>
        </>
    );
}
