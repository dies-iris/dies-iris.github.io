var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.opacity = "1";
    } else {
        document.getElementById("navbar").style.opacity = "0";
    }
    prevScrollpos = currentScrollPos;
}
const moveLabel = label => {
    label.className = "active";
}
const toDefault = label => {
    label.className = "";
}
const popup = document.getElementById("video_popup");
const showVideo = () => {
    popup.style.opacity = "1";
    popup.style.pointerEvents = "all";
    document.getElementById("video_back").pause();
    document.getElementById("video_full").src = "https://www.youtube.com/embed/Bvm8lCdD9rM?autoplay=1";
}

const closeVideo = () => {
    popup.style.opacity = "0";
    popup.style.pointerEvents = "none";
    document.getElementById("video_back").play();
    document.getElementById("video_full").src = "https://www.youtube.com/embed/Bvm8lCdD9rM";
}
const texts = [{
        titre: "Meilleur pour toi",
        text: "Cultured meat is the same as conventional meat so it's just as safe and healthy - in fact, more so.<br/><br/>Cultured meat is produced in a completely sterile environment. On the other hand, slaughterhouses are not sterile and bacteria commonly contaminates the meat, causing millions of people to suffer foodborne illnesses every year.<br/><br/>There is also the issue of antibiotics. In order to keep farm animals healthy in feedlots, the animals are treated with antibiotics. This heavy use of antibiotics is causing the emergence of antibiotic-resistant “superbugs”. There is research showing a growing number of patients appearing in hospital with bacterial disease that is resistant to all known treatment.<br/><br/>In contrast, because cultured meat is produced in a clean environment, there is no need to use any antibiotics at all.<br/><br/>Cultured meat is also free from artificial growth hormones that are used to make livestock grow faster, and does not involve any genetic modification."
    },
    {
        titre: "Meilleur pour la planète",
        text: "Animal agriculture produces 15% of greenhouse gas emissions, according to the Food and Agriculture Organisation of the UN. This is similar to the entire transportation sector (including all cars and planes) combined. Furthermore, cows emit methane, which is 20-30 times more potent than carbon dioxide as a heat-trapping gas.<br/><br/>Cultured meat generates up to 96% lower greenhouse gas emissions, helping us avoid the disastrous consequences of climate change. <br/><br/>Beyond climate change, livestock production has a number of other serious effects on the environment.<br/><br/>Raising livestock (and growing crops to feed them) uses large amounts of land, leading to mass deforestation. Large parts of the Amazon rainforest has already been cleared for cattle, for instance.<br/><br/>This in turn leads to drastic loss of biodiversity. Each day we lose upwards of 80,000 acres of tropical rainforest, and with it about 135 plant, animal and insect species. That’s 50,000 species going extinct every year.<br/><br/>A further issue is agricultural run-off. Pollution, including pesticides and fertilisers, leaves farms because of rain or irrigation, and runs into rivers and oceans. Once there, run-off can kill marine life and coral reefs, and even cause “dead zones” (low oxygen areas) where marine life suffocates and dies.<br/><br/>On the other hand, cultured meat production does not require chemicals such as pesticides and will take place in a closed system, ensuring run-off does not enter the natural environment."
    },
    {
        titre: "Meilleur pour les animaux",
        text: "Around 70 billion animals are reared for food each year, the majority in industrial farms where they experience inhumane conditions. <br/><br/>Producing cultured meat does not require the slaughter of any animals. Once cultured meat becomes a mass-market food, there will be no need for industrial farms, to the benefit of many millions of animals."
    }
]
const changeText = (index) => {
    let styleText = document.getElementById("text_container").style;
    let time = 0;
    if (styleText.opacity === "1") {
        time = 500;
        document.getElementById("text_wrapper").style.opacity = 0;
        setTimeout(function () {
            document.getElementById("text_wrapper").style.opacity = 1;
        }, time);
    }
    setTimeout(function () {
        document.getElementById("produits_titre").innerHTML = texts[index]['titre'];
        document.getElementById("produits_text").innerHTML = texts[index]['text'];
        let gif = document.getElementById("produits_image");
        switch (index) {
            case 0:
                    gif.src = "";
                break;
            case 1:
                console.log("burger "+index);
                gif.src = "assets/burger-anim.gif";
                break;
            case 2:
                console.log("cow "+index);
                gif.src = "assets/cow-anim.gif";
                break;
        }
    }, time)

    styleText.transform = "translate(0,0)";
    styleText.opacity = "1";
    styleText.pointerEvents = "all";

}