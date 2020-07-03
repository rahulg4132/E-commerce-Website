var items=[
	{
		'id': "1",
		'tag': 'clothing',
		'name': 'T-shirt',
		'brand': 'Denim',
		'price': 400,
		'quantity': 10,
		'image': "assets/images/img1.jpg"
	},
	{
		'id': "2",
		'tag': 'clothing',
		'name': 'Pant',
		'brand': 'Puma',
		'price': 600,
		'quantity': 5,
		'image': "assets/images/img2.jpg"
	},
	{
		'id': "3",
		'tag': 'books',
		'name': 'Computer Science',
		'brand': 'Arihant',
		'price': 200,
		'quantity': 10,
		'image': "assets/images/img3.jpg"
	},
	{
		'id': "4",
		'tag': 'books',
		'name': 'Storybook',
		'brand': 'Disha',
		'price': 40,
		'quantity': 5,
		'image': "assets/images/img4.jpg"
	},
	{
		'id': "5",
		'tag': 'electronics',
		'name': 'Realme 1',
		'brand': 'Realme',
		'price': 8990,
		'quantity': 10,
		'image': "assets/images/img5.jpg"
	},
	{
		'id': "6",
		'tag': 'electronics',
		'name': 'Redmi K20 pro',
		'brand': 'Redmi',
		'price': 29999,
		'quantity': 5,
		'image': "assets/images/img6.jpg"
	},
	{
		'id': "7",
		'tag': 'electronics',
		'name': 'Realme TV',
		'brand': 'Realme',
		'price': 15000,
		'quantity': 10,
		'image': "assets/images/img7.jpg"
	},
	{
		'id': "8",
		'tag': 'sports',
		'name': 'Sports Shoes',
		'brand': 'Nivia',
		'price': 700,
		'quantity': 5,
		'image': "assets/images/img8.jpg"
	}
];
var ll=items.length;
var userList=[
	{
		'fname': 'Rahul',
		'lname': 'Gupta',
		'phn': '123456789',
		'email': 'rg@gmail.com',
		'pwd': 'qwerty123',
	},
	{
		'fname': 'Admin',
		'lname': 'Admin',
		'phn': '1234',
		'email': 'admin',
		'pwd': 'admin',
	},
	{
		'fname': 'Shivam',
		'lname': 'Gupta',
		'phn': '123456789',
		'email': 'sg@gmail.com',
		'pwd': '123456789',
	},
	{
		'fname': 'Sai',
		'lname': 'Prakash',
		'phn': '01111',
		'email': 'saiprakash',
		'pwd': 'saiprakash',
	},
	{
		'fname': 'Vineet',
		'lname': 'KS',
		'phn': '56789',
		'email': 'vineetks',
		'pwd': 'vineetks',
	}
];
//------------------------------------Document ready
/*document.getElementById("loginform").addEventListener("submit", function(event){
	event.preventDefault()
});*/
$(document).ready(function(){			
	if(localStorage.getItem('user'))
	{
		$(".nouser").hide();
		$(".yesuser").show();
		var u=localStorage.getItem('user');			
		$(".userdisp").append(userList[u].fname);
	}
	else{		
		$(".yesuser").hide();
	}

	for(var i=0;i<ll;i++)
    {    
		//-------------------------------DISPLAY ALL ITEMS-------------------------
		//price calculator for filter purpose
		var pri=items[i].price,p="p1";
		if(pri>=0 && pri<500)
		p="p1";
		else if(pri>=500 && pri<1000)
		p="p2";
		else if(pri>=1000 && pri<2000)
		p="p3";
		else if(pri>=2000 && pri<5000)
		p="p4";
		else if(pri>=5000)
		p="p5";

		var appd="<button brand="+items[i].brand+" price="+p+" id="+items[i].id+" class='mycard mx-3 my-3'><img src="+items[i].image+" alt="+items[i].name+" width='290' height='250'><h6 style='text-align: center;'>"+items[i].name+", "+items[i].brand+"</h6><h6 style='text-align: center;'>Rs "+items[i].price+"</h6></button>";        
		$(".disphome").append(appd);
		if(items[i].tag=="clothing")
		$(".dispclothing").append(appd);
		if(items[i].tag=="electronics")
		$(".dispelectronics").append(appd);
		if(items[i].tag=="books")
		$(".dispbooks").append(appd);
		if(items[i].tag=="sports")
		$(".dispsports").append(appd);
	}

	//------------------------------------------------------------FILTER
	$('#filters :checkbox').click(function () {
		if ($('input:checkbox:checked').length)
		{
            $('.mycard').hide();
            $('input:checkbox:checked').each(function () {								
				$('button['+$(this).prop('name')+'*="'+$(this).val()+'"]').show();
            });
		}
		else
		{
            $(".mycard").show();
        }
    });			


	$(".dispdetails").hide();
	$(".mycard").click(function(){		
		var p=this.id;				
		for(var i=0;i<ll;i++)
		{
			if(p==items[i].id)
			{
				//-------------------------------ITEM DETAILS---------------------------
				$("section").hide();				
				var appd="<img src="+items[i].image+" alt="+items[i].name+" width='400' height='400'>";
				$(".dimg").append(appd);
				var appd="<div class='ml-4'><br><p><b>"+items[i].name+"</b></p><p>Brand: "+items[i].brand+"</p><p>Category: "+items[i].tag+"</p><p>Id No.: <span id='getid'>"+items[i].id+"</span></p><br><p>Price:<b>Rs "+items[i].price+"</b></p><br><br><button class='btn btn-warning yesuser' onclick='cartfun()'>Add to cart</button></div>";
				$(".ddet").append(appd);
				$(".dispdetails").show();
			}
		}					
	});
	$("#dispback").click(function(){
		$(".dimg").empty();
		$(".ddet").empty();
		$("section").show();
		$(".dispdetails").hide();
	});
	//--------------------------------------------------LOGIN-LOGOUT-CHECK		
	$(".hm_loginbtn").click(function(){
		var user=document.getElementById('userlogin').value;
		var pwd=document.getElementById('pwdlogin').value;
		for(var i=0;i<userList.length;i++)
		{		
			if(userList[i].email===user)
			{
				if(userList[i].pwd===pwd)
				{
					//localStorage.clear();
					localStorage.setItem('user',i);					
				}
				else
				{
					alert("Wrong Password !");
					return false;
				}
			}
		}
	});
	//-----------------------------------LOGOUT
	$(".logout").click(function(){
		localStorage.clear();
		location.reload();
	});	
	//---------------------------------------------------------CART Badge
	var bad=JSON.parse(localStorage.getItem('cart'));	
	if(bad!==null && bad.length>0){
		$(".badge").append(bad.length);

		//console.log(bad);
		var tot=0;
		for(var i=0;i<bad.length;i++)
		{
			for(var j=0;j<ll;j++)
			{
				//console.log("suc");
				if(bad[i]==items[j].id)
				{
					//-----------------------------------CART DISPLAY---------------------------------
					tot=tot+items[j].price;
					var appd="<div class='container d-flex justify-content-center'><div class='col-sm-1'><span>"+(i+1)+"</span></div><div class='col-sm-3'><img src="+items[j].image+" alt="+items[j].name+" width='100' height='100'></div><div class='col-sm-4'><p>"+items[j].name+"</p><p>"+items[j].brand+"</p></div><div class='col-sm-3'><p><b>Rs "+items[j].price+"</b></p></div><div class='col-sm-1'><button onclick='removecart("+i+")' class='btn-warning'>&#10006;</button></div></div><br>";
					$(".eachitem").append(appd);					
				}
			}
		}
		var appd="<div class='container d-flex justify-content-center'><div class='col-sm-8'><p style='text-align: center;'><b>Total:</b></p></div><div class='col-sm-4'><p><b>Rs "+tot+"</b></p></div></div>";
		$(".eachitem").append(appd);
		//$("#ptc").attr("abled");
	}
	else
	{
		$(".eachitem").empty();
		var appd="<div class='container'><h3 style='text-align: center'>No items in Cart</h3></div>";
		$(".eachitem").append(appd);
	}
	
});
//------------------------------------For SIDEBAR
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
	//document.body.style.backgroundColor = "rgba(0,0,0,0.4)";	
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
	//document.body.style.backgroundColor = "#FFF4CF";	
}
//------------------------------------------------------------------------------------CART
function cartfun()
{
	//location.replace("cart.html");
	var c=$("#getid").text();
	var cc;
    if (localStorage.getItem('cart') === null) {
        cc = [];
	}
	else {    
        cc = JSON.parse(localStorage.getItem('cart'));
    }    
    cc.push(c);        
	localStorage.setItem('cart', JSON.stringify(cc));
	alert("Item added to Cart");
	//-----------------------------------CART Badge
	var bad=JSON.parse(localStorage.getItem('cart'));
	if(bad!==null){
		$(".badge").empty();
		$(".badge").append(bad.length);
	}		
}

function removecart(x)
{		
	var bad=JSON.parse(localStorage.getItem('cart'));
	var cc=[];
	//console.log(x);
	for(var i=0;i<bad.length;i++)
	{
		if(x!==i)
		{			
			cc.push(bad[i]);
		}
	}
	//console.log(cc);
	localStorage.setItem('cart',JSON.stringify(cc));
	location.reload();
}

function goback()
{
	window.history.back();
}