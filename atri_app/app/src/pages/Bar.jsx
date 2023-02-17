import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { BarChart as BarChart1 } from "@atrilabs/react-component-manifests/src/manifests/charts/BarChart/BarChart.tsx";
import { useBar2Cb } from "../page-cbs/Bar";
import "../page-css/Bar.css";
import "../custom/Bar";

export default function Bar() {
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

  const Bar2Props = useStore((state)=>state["Bar"]["Bar2"]);
const Bar2IoProps = useIoStore((state)=>state["Bar"]["Bar2"]);
const Bar2Cb = useBar2Cb()

  return (<>
  <BarChart1 className="p-Bar Bar2 bpt" {...Bar2Props} {...Bar2Cb} {...Bar2IoProps}/>
  </>);
}
