# configurar terminal:

1- Instalar oh-my-posh

Lista de comandos en: página de oh-my-posh > Docs > Customize

Comando en terminal: New-Item -Path $PROFILE -Type File -Force

2- Instalar: https://github.com/Schniz/fnm (Con comando en terminal)

3- en terminal: notepad $PROFILE

4- fnm env --use-on-cd --shell powershell | Out-String | Invoke-Expression

5- fnm install --lts

6- fnm use 22
