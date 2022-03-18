export function IsEmail(email: string) {
    var exclude = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    var check = "/@[w-]+./";
    var checkend = "/.[a-zA-Z]{2,3}$/";
    if (((email.search(exclude) != -1) || (email.search(check)) == -1) || (email.search(checkend) == -1)) { return false; }
    else { return true; }
}

export function verifyEmpty(value: string, name: string) {
    if (value.length < 2) {
        var input = document.getElementsByName(name)[0];
        input.classList.add("error");
        return true;
    }
    return false
}