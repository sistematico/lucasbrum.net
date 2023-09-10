---
layout: post
title: "Tiling no Openbox"
tags:
  - openbox
published: true
---

Como funciona:
![OpenBox Tiling](/img/posts/openbox-tiling.png "Optional title")

### Adicionar ao seu arquivo `/etc/xdg/openbox/rc.xml` ou `~/.config/openbox/rc.xml`:  
```  
<!-- Tiling -->
<!-- Vertical tiling -->
<keybind key="C-W-Left">
  <action name="UnmaximizeFull"/>
  <action name="MoveResizeTo">
  <width>50%</width>
  </action>
  <action name="MaximizeVert"/>
  <action name="MoveResizeTo">
  <x>0</x>
  <y>0</y>
  </action>
  <action name="NextWindow">
  <interactive>no</interactive>
  <dialog>none</dialog>
  <finalactions>
    <action name="UnmaximizeFull"/>
    <action name="MoveResizeTo">
      <width>50%</width>
    </action>
    <action name="MaximizeVert"/>
    <action name="MoveResizeTo">
      <x>-0</x>
      <y>0</y>
    </action>
  </finalactions>
  </action>
</keybind>

<keybind key="C-W-Right">
  <action name="UnmaximizeFull"/>
  <action name="MoveResizeTo">
  <width>50%</width>
  </action>
  <action name="MaximizeVert"/>
  <action name="MoveResizeTo">
  <x>-1</x>
  <y>0</y>
  </action>
  <action name="NextWindow">
  <interactive>no</interactive>
  <dialog>none</dialog>
  <finalactions>
    <action name="UnmaximizeFull"/>
    <action name="MoveResizeTo">
      <width>50%</width>
    </action>
    <action name="MaximizeVert"/>
    <action name="MoveResizeTo">
      <x>-0</x>
      <y>0</y>
    </action>
  </finalactions>
  </action>
</keybind>

<!-- Horizontal tiling -->
<keybind key="C-W-Up">
  <action name="UnmaximizeFull"/>
  <action name="MoveResizeTo">
  <height>50%</height>
  </action>
  <action name="MaximizeHorz"/>
  <action name="MoveResizeTo">
  <x>0</x>
  <y>0</y>
  </action>
  <action name="NextWindow">
  <interactive>no</interactive>
  <dialog>none</dialog>
  <finalactions>
    <action name="UnmaximizeFull"/>
    <action name="MoveResizeTo">
      <height>50%</height>
    </action>
    <action name="MaximizeHorz"/>
    <action name="MoveResizeTo">
      <x>0</x>
      <y>-0</y>
    </action>
  </finalactions>
  </action>
</keybind>

<keybind key="C-W-Down">
  <action name="UnmaximizeFull"/>
  <action name="MoveResizeTo">
  <height>50%</height>
  </action>
  <action name="MaximizeHorz"/>
  <action name="MoveResizeTo">
  <x>0</x>
  <y>-1</y>
  </action>
  <action name="NextWindow">
  <interactive>no</interactive>
  <dialog>none</dialog>
  <finalactions>
    <action name="UnmaximizeFull"/>
    <action name="MoveResizeTo">
      <height>50%</height>
    </action>
    <action name="MaximizeHorz"/>
    <action name="MoveResizeTo">
      <x>0</x>
      <y>-0</y>
    </action>
  </finalactions>
  </action>
</keybind>

<!-- Restore window dimensions -->
<keybind key="C-W-r">
  <action name="UnmaximizeFull"/>
  <action name="NextWindow">
  <interactive>no</interactive>
  <dialog>none</dialog>
  <finalactions>
    <action name="UnmaximizeFull"/>
  </finalactions>
  </action>
</keybind>

<!-- Restore FullScreen -->
<keybind key="C-W-f">
  <action name="ToggleMaximizeFull"/>
  <action name="NextWindow">
  <interactive>no</interactive>
  <dialog>none</dialog>
  <finalactions>
    <action name="ToggleMaximizeFull"/>
  </finalactions>
  </action>
</keybind> 	 
<!-- Fim do Tiling -->    
```  
Em qualquer lugar entre a linha **&lt;keyboard&gt;** e **&lt;/keyboard&gt;**.

Arquivo completo: <https://github.com/sistematico/caos/blob/master/etc/xdg/openbox/rc.xml#L326-L394>

Boa sorte!  
&#45;&#45;  
Lucas Saliés Brum    
a.k.a. sistematico
