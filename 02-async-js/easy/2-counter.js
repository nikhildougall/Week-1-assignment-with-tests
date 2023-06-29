function counter(count){
    console.clear();
    console.log(count);
    setTimeout(counter, 1000, count+1);
}

setTimeout(counter, 1000, 0);