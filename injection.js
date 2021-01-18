function replaceFunction(item, key) {
    item.value = item.value.replace(key, document.getElementsByName("contName")[0].value);
}
(document.getElementsByName("confTarget[]")).forEach(replaceFunction, "{{ container }}")
(document.getElementById("configLocation")).insertAdjacentHTML("beforeend", "<div>This will break</div>")