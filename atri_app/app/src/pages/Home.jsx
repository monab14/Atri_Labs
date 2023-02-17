import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { BarChart } from "@atrilabs/react-component-manifests/src/manifests/charts/BarChart/BarChart.tsx";
import { usebar2Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const bar2Props = useStore((state)=>state["Home"]["bar2"]);
const bar2IoProps = useIoStore((state)=>state["Home"]["bar2"]);
const bar2Cb = usebar2Cb()

  return (<>
  <BarChart className="p-Home bar2 bpt" {...bar2Props} {...bar2Cb} {...bar2IoProps}/>
  </>);
}
