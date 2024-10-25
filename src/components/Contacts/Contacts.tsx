import { useCallback, useEffect, useState } from "react";
import { IInfoAPI } from "../../types";
import axiosAPI from "../../axiosAPI.tsx";
import Spinner from "../UI/Spinner/Spinner.tsx";

const Contacts = () => {
  const [info, setInfo] = useState<IInfoAPI>();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchInfoData = useCallback(async () => {
    try {
      setLoading(true);
      const response: { data: IInfoAPI } =
        await axiosAPI<IInfoAPI>("contacts.json");
      if (response.data) {
        setInfo(response.data);
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

  const style = {
    padding: "40px",
    color: "white",
    fontSize: "26px",
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div style={{ background: "black" }}>
            <h2 style={style}>{info ? <>{info.info}</> : null}</h2>
            <h2 style={style}>{info ? <>{info.info1}</> : null}</h2>
            <h2 style={style}>{info ? <>{info.info2}</> : null}</h2>
          </div>
        </>
      )}
    </>
  );
};

export default Contacts;
