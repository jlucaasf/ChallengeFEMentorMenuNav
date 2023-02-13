
const boxFeat = document.getElementById("boxFeat");
const botaoFeat = document.getElementById("botaoFeat");
const botaoComp = document.getElementById("botaoComp");
const boxComp = document.getElementById("boxComp");
const logoId = document.getElementById("logoId");
verifFeat = false;
verifComp = false


function abrirBoxFeat() {

    if (verifFeat == false) {
        boxFeat.classList.remove("boxFeaturesOff");
        boxFeat.classList.add("boxFeaturesOn");
        document.getElementById("setaCimaFeat").removeAttribute('hidden');
        document.getElementById("setaBaixoFeat").setAttribute('hidden', 0);
        verifFeat = true;
    }
    else if (verifFeat == true) {
        boxFeat.classList.remove("boxFeaturesOn");
        boxFeat.classList.add("boxFeaturesOff");
        document.getElementById("setaBaixoFeat").removeAttribute('hidden');
        document.getElementById("setaCimaFeat").setAttribute('hidden', 0);
        verifFeat = false;
    }
}

function abrirBoxComp() {
    if (verifComp == false) {
        boxComp.classList.remove("boxCompanyOff");
        boxComp.classList.add("boxCompanyOn");
        document.getElementById("setaCimaComp").removeAttribute('hidden');
        document.getElementById("setaBaixoComp").setAttribute('hidden', 0);
        verifComp = true;
    }
    else if (verifComp == true) {
        boxComp.classList.remove("boxCompanyOn");
        boxComp.classList.add("boxCompanyOff");
        document.getElementById("setaBaixoComp").removeAttribute('hidden');
        document.getElementById("setaCimaComp").setAttribute('hidden', 0);
        verifComp = false;
    }
}



botaoFeat.addEventListener("click", () => {
    abrirBoxFeat();

})

botaoComp.addEventListener("click", () => {
    abrirBoxComp();


})


logoId.addEventListener("click", () => {
    location.reload();
})

