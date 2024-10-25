import Grid from "@mui/material/Grid2";
import {useCallback, useEffect, useState} from "react";
import {IInfoAPI} from "../../types";
import axiosAPI from "../../axiosAPI.tsx";
import Spinner from "../UI/Spinner/Spinner.tsx";

const About = () => {
    const [infoAbout, setInfoAbout] = useState<IInfoAPI>();
    const [loading, setLoading] = useState<boolean>(true);

    const fetchInfoData = useCallback(async () => {
        try {
            setLoading(true);
            const response: { data: IInfoAPI } = await axiosAPI<IInfoAPI>('about.json');
            if (response.data) {
                setInfoAbout(response.data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, []);


    useEffect(() => {
        void fetchInfoData();
    }, [fetchInfoData]);
    return (
        <>
            {loading ? <Spinner/> :
                <>
                    <div>
                        <h1>Daily Bugle</h1>
                        <Grid container>
                            <Grid size={7}>
                                <p style={{marginBottom: '40px'}}>
                                    {infoAbout ? (
                                        <>
                                            {infoAbout.info}
                                        </>
                                    ) : null
                                    }
                                </p>
                                <p style={{marginBottom: '40px'}}>
                                    {infoAbout ? (
                                        <>
                                            {infoAbout.info1}
                                        </>
                                    ) : null
                                    }
                                </p>
                                <p>
                                    {infoAbout ? (
                                        <>
                                            {infoAbout.info2}
                                        </>
                                    ) : null
                                    }
                                </p>
                            </Grid>
                            <Grid>
                                <img
                                    src="https://i.pinimg.com/enabled/474x/a8/07/99/a8079933bb8d8bcdeb66cbbb00a3645a.jpg"
                                    alt="daily Bugle"/>
                            </Grid>
                        </Grid>
                    </div>
                </>
            }
        </>
    );
};

export default About;