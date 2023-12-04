export default function BS5Button({ type = 0, title }) {

    function getBS5ClassName(type) {
        let string = null;
        switch (type) {
            case 1:
                string = "secondary";
                break
            case 2:
                string = "success";
                break;
            case 3:
                string = "danger";
                break;
            case 4:
                string = "warning";
                break;
            case 5:
                string = "secondary";
                break;
            case 6:
                string = "info";
                break;
            case 7:
                string = "light";
                break;
            case 8:
                string = "dark";
                break;
            case 9:
                string = "link";
                break;
            default:
                string = "primary";
                break;
        }
        return `btn btn-${string}`
    }

    return (
        <button type="button" class={getBS5ClassName(type)} > {title}</button >
    )
}
