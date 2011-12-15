echo ^<script^> >formfull.html
type form.js >>formfull.html
echo ^</script^> >>formfull.html
echo ^<style^> >>formfull.html
type form.css >>formfull.html
echo ^</style^> >>formfull.html
type form.html | find /v /i "css" | find /v /i "script" >>formfull.html

