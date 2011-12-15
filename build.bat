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
echo rem Храним версии >VERSION.bat
echo set /a aversion=%aversion% >>VERSION.bat
echo set /a bversion=%bversion% >>VERSION.bat
echo set /a cversion=%cversion% >>VERSION.bat
echo set /a dversion=%dversion% >>VERSION.bat
