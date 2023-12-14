function Menu(props,{childern}) {

    return (
        <>
            <h2>{props.name}</h2>
            <p>{childern}</p>
            <a href={props.email}>{props.emailName}</a>
        </>
    )
}

export default Menu;