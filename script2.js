

var mainServerJson = []


var getJSON = function (url, id, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response, id);
        } else {
            callback(status, xhr.response, id);
        }
    };
    xhr.send();
};

var i = 1;                  //  set your counter to 1

function myLoop() {         //  create a loop function
    // setTimeout(function () {   //  call a 3s setTimeout when the loop is called
    //     featchData(i)   //  your code here
    //     i++;                    //  increment the counter
    //     if (i <= 1) {           //  if the counter < 10, call the loop function
    featchData();             //  ..  again which will trigger another 
    //     }                       //  ..  setTimeout()
    // }, 4000)
}


async function featchData() {

    var surah = 1;
    //var newJson = [];

    for (var i = 0, ln = json.length; i < ln; i++) {
        var index = i;
        var ayat = json[i];


        var newJson = [];

        var ar = ayat.w.split("|");
        var en = ayat.e.split("//");
        var bn = ayat.m.split("//");

        var mainArabic = "";

        ar.forEach((v, i) => {
            var ar = v.split("./")[0].split("/")[1]
            var ar_u = ar.charAt(0).toUpperCase() + ar.slice(1)
            var obj = {
                "bengali": bn[i],
                "english": en[i],
                "en_t": v.split("./")[1],
                "arabic": ar_u,
                "ar_mp3": "https://words.audios.quranwbw.com/" + surah + "/" + padZero(surah) + "_" + padZero(index + 1) + "_" + padZero(i + 1) + ".mp3",
                "id": padZero(surah) + "_" + padZero(index + 1) + "_" + padZero(i + 1)
            }
            mainArabic = mainArabic + (i > 0 ? " " : "") + obj.arabic;
            newJson.push(obj);
        });

        //console.log("new", newJson);

        var mainAyat = {
            "ayat_mp3": "https://everyayah.com/data/Alafasy_128kbps/" + padZero(surah) + padZero(index + 1) + ".mp3",
            "arabic": mainArabic,
            "bengali": ayat.fm,
            "english": ayat.fme.charAt(0).toUpperCase() + ayat.fme.slice(1),
            "wbw": newJson
        }

        //saveData(mainAyat, 'Surah_' + padZero(surah) + padZero(index + 1) + '.json');
        mainServerJson.push({ data: mainAyat, id: padZero(surah) + "_" + padZero(index + 1) });

        // var ar = ayat.w.split("|");
        // var en = ayat.e.split("//");
        // var bn = ayat.m.split("//");

        // var mainArabic = "";

        // const s_eng = ayat.fme;
        // const s_eng_u = s_eng.charAt(0).toUpperCase() + s_eng.slice(1);


        // newJson.push({ "data": ayat.fm, "id": padZero(surah) + "_" + padZero(index + 1) + "_main_bn" });

        // newJson.push({ "data": s_eng_u, "id": padZero(surah) + "_" + padZero(index + 1) + "_main_en" });


        // ar.forEach((v, i) => {


        //     const eng = en[i];
        //     const eng_u = eng.charAt(0).toUpperCase() + eng.slice(1);


        //     newJson.push({ "data": bn[i], "id": padZero(surah) + "_" + padZero(index + 1) + "_" + padZero(i + 1) + "_bn" });

        //     newJson.push({ "data": eng_u, "id": padZero(surah) + "_" + padZero(index + 1) + "_" + padZero(i + 1) + "_en" });

        //     newJson.push({ "data": v.split("./")[0].split("/")[1], "id": padZero(surah) + "_" + padZero(index + 1) + "_" + padZero(i + 1) + "_ar" });


        //     var obj = {
        //         "bengali": bn[i],
        //         "english": en[i],
        //         "en_t": v.split("./")[1],
        //         "arabic": v.split("./")[0].split("/")[1],
        //         "ar_mp3": "https://words.audios.quranwbw.com/" + surah + "/" + padZero(surah) + "_" + padZero(index + 1) + "_" + padZero(i + 1) + ".mp3"
        //     }
        //     mainArabic = mainArabic + (i > 0 ? " " : "") + obj.arabic;
        //     // newJson.push(obj);
        // });



        //newJson.push({ "data": mainArabic, "id": padZero(surah) + "_" + padZero(index + 1) + "_main_ar" });

        //console.log("new", newJson);

    }

    doStuff(mainServerJson);
}

// async function mainCall(newJson) {

//     for (let i = 0; i < newJson.length; i++) {
//         var ele = newJson[i];
//         await join(ele.data, ele.id);

//         const para = document.createElement("div");
//         para.id = id;
//         para.style.color = "#ffffff";
//         para.style.width = "1080px";
//         para.style.height = "320px";
//         para.style.padding = "10px";
//         para.style.textAlign = "center";

//         const label = document.createElement("label");
//         label.innerHTML = data;
//         label.style.fontSize = data.length > 150 ? "30px" : data.length > 70 ? "50px" : "72px";

//         para.appendChild(label);

//         const element = document.getElementById("maindiv");
//         element.appendChild(para);

//         html2canvas(document.getElementById(id), { backgroundColor: null }).then(function (canvas) {
//             var anchorTag = document.createElement("a");
//             document.body.appendChild(anchorTag);
//             document.getElementById("previewImg").appendChild(canvas);
//             anchorTag.download = id + ".png";
//             anchorTag.href = canvas.toDataURL();
//             anchorTag.target = '_blank';
//             anchorTag.click();
//         });
//     }
//     return "OK";
// }

// async function join(data, id) {

//     const para = document.createElement("div");
//     para.id = id;
//     para.style.color = "#ffffff";
//     para.style.width = "1080px";
//     para.style.height = "320px";
//     para.style.padding = "10px";
//     para.style.textAlign = "center";

//     const label = document.createElement("label");
//     label.innerHTML = data;
//     label.style.fontSize = data.length > 150 ? "30px" : data.length > 70 ? "50px" : "72px";

//     para.appendChild(label);

//     const element = document.getElementById("maindiv");
//     element.appendChild(para);

//     html2canvas(document.getElementById(id), { backgroundColor: null }).then(function (canvas) {
//         var anchorTag = document.createElement("a");
//         document.body.appendChild(anchorTag);
//         document.getElementById("previewImg").appendChild(canvas);
//         anchorTag.download = id + ".png";
//         anchorTag.href = canvas.toDataURL();
//         anchorTag.target = '_blank';
//         anchorTag.click();
//         return "OK";
//     });


// }



function padZero(number) {
    return number.toString().padStart(3, '0');
}

function getValue() {
    console.log(document.getElementById("html-content-holder"));
}

// function download(data, id) {
//     const para = document.createElement("div");
//     para.id = id;
//     para.style.color = "#ffffff";
//     para.style.width = "1080px";
//     para.style.height = "320px";
//     para.style.padding = "10px";
//     para.style.textAlign = "center";

//     const label = document.createElement("label");
//     label.innerHTML = data;
//     label.style.fontSize = data.length > 150 ? "30px" : data.length > 70 ? "50px" : "72px";

//     para.appendChild(label);

//     const element = document.getElementById("maindiv");
//     element.appendChild(para);

//     html2canvas(document.getElementById(id), { backgroundColor: null }).then(function (canvas) {
//         var anchorTag = document.createElement("a");
//         document.body.appendChild(anchorTag);
//         document.getElementById("previewImg").appendChild(canvas);
//         anchorTag.download = id + ".png";
//         anchorTag.href = canvas.toDataURL();
//         anchorTag.target = '_blank';
//         anchorTag.click();
//     });
// }

const example1 = (data, id, ar) => new Promise(function (resolve, reject) {

    const para = document.createElement("div");
    para.id = id;
    para.style.color = "#ffffff";
    para.style.width = "1050px";
    para.style.height = "1900px";
    para.style.padding = "30px";
    para.style.textAlign = "center";
    para.style.display = "flex";
    para.style.flexFlow = "column nowrap";
    if (ar == true) {
     para.style.justifyContent = "start";
    }
    else if(ar == false){
        para.style.justifyContent = "center";
    }
    else{
        para.style.justifyContent = "end";
    }

    const label = document.createElement("label");
    label.innerHTML = data;
    if (ar == true) {
        label.style.fontSize = data.length > 150 ? "50px" : data.length > 70 ? "80px" : "120px";
    }
    else{
        label.style.fontSize = data.length > 150 ? "30px" : data.length > 70 ? "50px" : "72px";
    }

    para.appendChild(label);

    const element = document.getElementById("maindiv");
    element.appendChild(para);

    html2canvas(document.getElementById(id), { backgroundColor: null }).then(function (canvas) {
        var anchorTag = document.createElement("a");
        document.body.appendChild(anchorTag);
        document.getElementById("previewImg").appendChild(canvas);
        anchorTag.download = id + ".png";
        //anchorTag.href = canvas.toDataURL();
        //anchorTag.target = '_blank';
        //setTimeout(function () {
            resolve(canvas.toDataURL());
        //}, 1000);
    });
});

const example2 = (data, id) => new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log(data);
        console.log(id);
        resolve('foo2');
    }, 500);
});
var mainMainJSON = [];
const doStuff = async (newJson) => {

    console.log('newJson', newJson);
    //const listExample = ['a','b','c'];
    for (let i = 0; i < newJson.length; i++) {

        var arabic_img = await example1(newJson[i].data.arabic, newJson[i].id + "_ar",true);
        var english_img = await example1(newJson[i].data.english, newJson[i].id + "_en",null);
        var bnengali_img = await example1(newJson[i].data.bengali, newJson[i].id + "_bn",false);

        var childs = [];

        for (let j = 0; j < newJson[i].data.wbw.length; j++) {

            var ar_img = await example1(newJson[i].data.wbw[j].arabic, newJson[i].data.wbw[j].id + "_ar",true);
            var en_img = await example1(newJson[i].data.wbw[j].english, newJson[i].data.wbw[j].id + "_en",null);
            var bn_img = await example1(newJson[i].data.wbw[j].bengali, newJson[i].data.wbw[j].id + "_bn",false);

            childs.push({
                "id": newJson[i].data.wbw[j].id, "mp3": newJson[i].data.wbw[j].ar_mp3,
                "ar_img": ar_img.split(",")[1], "en_img": en_img.split(",")[1], "bn_img": bn_img.split(",")[1]
            });
            console.log("childs", childs);
        }

        mainMainJSON.push({
            "id": newJson[i].id,
            "mp3": newJson[i].data.ayat_mp3,
            "arabic_img": arabic_img.split(",")[1],
            "english_img": english_img.split(",")[1],
            "bnengali_img": bnengali_img.split(",")[1],
            "childs": childs
        })

    }

    console.log('mainMainJSON', mainMainJSON);

    saveData(mainMainJSON, "001.json")

    //console.log("The End");
};

function saveData(data, fileName) {
    //setTimeout(() => {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";

    var json = JSON.stringify(data),
        blob = new Blob([json], { type: "octet/stream" }),
        url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
    //}, 2000);
}
