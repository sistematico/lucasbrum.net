---
layout: post
title: "Ativando o Windows Snapping no OpenBox"
subtitle: "Testado no OpenBox sob Arch Linux"
tags:
  - openbox
published: true
---

Algumas pessoas sempre me perguntam porque eu não uso um gerenciador de janelas que funcione no modo Tiling.
A grande verdade é que resisto a mudanças, e o estilo Tiling realmente não me atrai, sou um escravo do mouse :smile:

Porem, existem alguns momentos que é necessário dividir a tela em duas(ou mais) partes para aumentar nossa produtividade.

Pensando nisto eu resolvi procurar uma solução, que fosse parecida com o sistema de Tiling porem que não perdesse a flexibilidade de mover as janelas como o Openbox faz, e achei!

<!-- mais -->

Edite o arquivo `/etc/xdg/openbox/rc.xml` ou `/.config/openbox/rc.xml`  
Antes da linha que tem `</keyboard>` adicione o seguinte código.

```xml
<!-- Windows Snap -->    
<keybind key="W-Left">
    <action name="UnmaximizeFull"/>
    <action name="MaximizeVert"/>
    <action name="MoveResizeTo">
        <width>50%</width>
    </action>
    <action name="MoveToEdge"><direction>west</direction></action>
</keybind>
<keybind key="W-Right">
    <action name="UnmaximizeFull"/>
    <action name="MaximizeVert"/>
    <action name="MoveResizeTo">
        <width>50%</width>
    </action>
    <action name="MoveToEdge"><direction>east</direction></action>
</keybind>

<keybind key="W-Down">
   <action name="Unmaximize"/>
</keybind>
<keybind key="W-Up">
   <action name="Maximize"/>
</keybind>  
```

Agora de um `openbox --reconfigure` e aperte a tecla <WINDOWS> + setas direcionais.

Caso tenha dificuldades, compare meu arquivo rc.xml com o seu:
{% gist sistematico/6047b4a7f454291e19eb %}

Maiores informações:  
* [Wiki do Arch Linux](https://wiki.archlinux.org/index.php/Openbox#Window_snapping)  
* [Wiki do Openbox](http://openbox.org/wiki/Help:Actions#MoveResizeTo)

Forte abraço.
