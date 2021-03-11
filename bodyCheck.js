const bodyLists = ["0BF", "HUA", "S2A", "F3F"];
// let bodyNo = "hua 123456";
let bodyNo = "12345678901234567"
let bodyFlag = false;

console.log(`body# is ${bodyNo} body#\'s length is ${bodyNo.length}`);

bodyNo = bodyNo.toUpperCase().replaceAll(" ", "");


for (i = 0; i < bodyLists.length; i++)
{
    if(bodyNo.startsWith(bodyLists[i]))
    {
        bodyFlag = true;
    }
    // console.log(bodyLists[i]);
}

if ((bodyFlag == true && bodyNo.length == 9) || bodyNo.length == 17)
{
    console.log(`body# is ${bodyNo} body#\'s length is ${bodyNo.length}`);

}
else
{
    console.log('not validate');
}

