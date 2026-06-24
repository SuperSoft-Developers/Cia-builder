function gerar(){
    const nome = document.getElementById("nome").value;
    const tipo = document.getElementById("tipo").value;

    document.getElementById("saida").textContent =
`Projeto criado!

Nome: ${nome}
Tipo: ${tipo}

Arquivos:
- source/main.cpp
- Makefile
- icon.png
- banner.png
- smdh

Pronto para ser compilado com devkitPro/FirmBuilder para gerar um .cia do seu próprio homebrew.`;
}
