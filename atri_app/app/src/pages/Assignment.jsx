import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useImage2Cb, useButton17Cb } from "../page-cbs/Assignment";
import "../page-css/Assignment.css";
import "../custom/Assignment";

export default function Assignment() {
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

  const Image2Props = useStore((state)=>state["Assignment"]["Image2"]);
const Image2IoProps = useIoStore((state)=>state["Assignment"]["Image2"]);
const Image2Cb = useImage2Cb()
const Button17Props = useStore((state)=>state["Assignment"]["Button17"]);
const Button17IoProps = useIoStore((state)=>state["Assignment"]["Button17"]);
const Button17Cb = useButton17Cb()

  return (<>
  <Image className="p-Assignment Image2 bpt" {...Image2Props} {...Image2Cb} {...Image2IoProps}/>
<Button className="p-Assignment Button17 bpt" {...Button17Props} {...Button17Cb} {...Button17IoProps}/>
  </>);
}
