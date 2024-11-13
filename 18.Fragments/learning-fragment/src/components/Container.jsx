import style from "./Container.module.css";
const  Container = (props,asdf) => {

    return <div className={style.Container}>{props.children}</div>
}

export default Container;