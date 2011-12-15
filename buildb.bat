call version.bat
echo ^<!-- version %aversion%.%bversion%.%cversion%.%dversion% --^> >formfull.html
echo ^<script^> >>formfull.html
type form.js >>formfull.html
echo ^</script^> >>formfull.html
echo ^<style^> >>formfull.html
type form.css >>formfull.html
echo ^</style^> >>formfull.html
type form.html | find /v /i "css" | find /v /i "script" >>formfull.html
set /a dversion=%dversion%+1
set /a bversion=%bversion%+1
echo rem Храним версии >VERSION.bat
echo set aversion=%aversion% >>VERSION.bat
echo set bversion=%bversion% >>VERSION.bat
echo set cversion=0 >>VERSION.bat
echo set dversion=%dversion% >>VERSION.bat
