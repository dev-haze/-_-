function show_middle() {
    least = document.getElementById("least").value;
    max = document.getElementById("maximum").value;

    document.getElementById("rsult").innerHTML = toString((least + max) / 2);
}