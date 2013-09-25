var i=0;

var textArray = new Array();
textArray[0] = "The drilling site before the rig was installed.";
textArray[1] = "Drilcorp's Beretta T151S track-mounted, top-drive drilling rig arrives on site.";
textArray[2] = "The drilling rig set up and ready to start.";
textArray[3] = "Carys Bennett (University of Leicester), Alistair Birkett (landowner) and Dave Millward (BGS) standing in front of the rig.";
textArray[4] = "The drilling rig in action.";
textArray[5] = "Extracting a 3 metre length of core from the inner core barrel.";
textArray[6] = "Another shot of the rig in operation.";
textArray[7] = "A short section of core from the lower part of borehole.  Nodular anhydrite (off white) and gypsum (pink) from a thick bed.";
textArray[8] = "A short section of core showing anhydrite with chicken-wire texture.  Today, gypsum and anhydrite form by <br>evaporation in sabkhas on coastal margins of, for example, North Africa and around the Red Sea.";
textArray[9] = "A new drill head (left) and the one used here (right) after the borehole had been completed.";
textArray[10] = "The overshot device (right, on table) is sent down the borehole on a winch cable to recover a full core barrel.  <br>The end of the inner barrel has a core catcher which is fitted with retaining springs (front). The normal <br>spring fitted is that on the right, the ohters being used for unconsolidated deposits or, in some cases, <br>for closely fractured rock.  The springs work most of the time, but occasionally fail to hold the core.";
textArray[11] = "Mike Browne (BGS) discussing logging the cores with BGS geologists.";


var imageArray = new Array();
imageArray[0] = new Image ();
imageArray[0].src = "/common/images/Borehole/DrillingSiteBefore.jpg";
imageArray[1] = new Image ();
imageArray[1].src = "/common/images/Borehole/IMG_5324small.jpg";
imageArray[2] = new Image ();
imageArray[2].src = "/common/images/Borehole/GEDC0206small.jpg";
imageArray[3] = new Image ();
imageArray[3].src = "/common/images/Borehole/GEDC0213small.jpg";
imageArray[4] = new Image ();
imageArray[4].src = "/common/images/Borehole/IMG_5358small.jpg";
imageArray[5] = new Image ();
imageArray[5].src = "/common/images/Borehole/IMG_5362small.jpg";
imageArray[6] = new Image ();
imageArray[6].src = "/common/images/Borehole/IMG_5401small.jpg";
imageArray[7] = new Image ();
imageArray[7].src = "/common/images/Borehole/IMG_5405edsmall.jpg";
imageArray[8] = new Image ();
imageArray[8].src = "/common/images/Borehole/IMG_5407edsmall.jpg";
imageArray[9] = new Image ();
imageArray[9].src = "/common/images/Borehole/IMG_5468small.jpg";
imageArray[10] = new Image ();
imageArray[10].src = "/common/images/Borehole/IMG_5475small.jpg";
imageArray[11] = new Image ();
imageArray[11].src = "/common/images/Borehole/P1080744small.jpg";

function debug()
{
	for (i=0;i<12;i++)
	  {
		document.write(imageArray[i].src + "<br>");
		document.write(textArray[i] + "<br><br>");
	  };
}

function slideshowUp()
{
	i=i+1
	if (i>11)
  	{i=0}
	document.mypic.src=imageArray[i].src
	document.getElementById("Caption").innerHTML=textArray[i]
}

function slideshowBack()
{
	i=i-1
	if (i<0)
		{i=11}
    document.mypic.src=imageArray[i].src
	document.getElementById("Caption").innerHTML=textArray[i]
}
