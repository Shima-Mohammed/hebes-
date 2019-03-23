
var app = angular.module("myApp",[]);
app.controller("myCtrl",function($scope){
    
    $scope.shoopingList = []; 
	$scope.loveList = [] ; 
	$scope.loveShow ; 
    $scope.user = "no one "  ; 
	$scope.last = {
		proName:"Hebes sofa" , 
           proPrice:"$80.00",
           proImage:"deal2" ,
		   proToggle:"chair", 
           proId :"deal2" , 
		   proLove:"sofalove4" , 
		   proPriceInt: 80.00
		
	}
    /***************************products array ******************************/
    
   $scope.product =
      [
       {
           proName:"Valar Chair" , 
           proPrice:"$88.00",
           proImage:"chair1" , 
           proToggle:"chair", 
           proId :"chai1" ,
		   proLove:"chairlove1" , 
		   proPriceInt: 88.00

           
           
       },
       {
           proName:"Hebes Chair" , 
           proPrice:"$55.00",
           proImage:"chair2" , 
           proToggle:"chair" , 
           proId :"chai2"  , 
		   proLove:"chairlove2" ,
		   proPriceInt: 55.00
       },
      
       {
           proName:"Galaxy Wood " , 
           proPrice:"$68.00",
           proImage:"chair3" , 
           proToggle:"chair" ,
           proId :"chai3" ,
		   proLove:"chairlove3" ,
		   proPriceInt: 68.00
       },
       {
            proName:"Hebes Decor" , 
           proPrice:"$105.00",
           proImage:"chair4" , 
           proToggle:"chair" ,
           proId :"chai4" , 
		   proLove:"chairlove4" ,
		   proPriceInt: 105.00
       },
       {
           proName:"Galar Sofa" , 
           proPrice:"$250.00",
           proImage:"sofa1" , 
           proToggle:"sofa" ,
           proId :"sof1" ,
		   proLove:"sofalove1" , 
		   proPriceInt: 250.00
       },
       {
           proName:"Camelback" , 
           proPrice:"$118.00",
           proImage:"sofa2" , 
           proToggle:"sofa" , 
           proId :"sof2",
		   proLove:"sofalove2" , 
		   proPriceInt: 118.00
       },
       {
           proName:"Hebes Decor" , 
           proPrice:"$185.00",
           proImage:"sofa5" , 
           proToggle:"sofa" , 
           proId :"sof3" ,
		   proLove:"sofalove5" , 
		   proPriceInt: 185.00
       },
       
        {
           proName:"Galar Sofa" , 
           proPrice:"$185.00",
           proImage:"sofa3" , 
           proToggle:"sofa" ,
           proId :"sof4" ,
		   proLove:"sofalove3" , 
			proPriceInt: 185.00
       },
       
       {
           proName:"Hebes Table" , 
           proPrice:"$65.00",
           proImage:"table1" , 
           proToggle:"table" ,
           proId :"tab1" ,
		   proLove:"tablelove1" , 
		   proPriceInt: 65.00
       },
       
       {
           proName:"Hebes Table" , 
           proPrice:"$85.00",
           proImage:"table2" , 
           proToggle:"table" , 
           proId :"tab2" ,
		   proLove:"tablelove2" , 
		   proPriceInt: 85.00
       },
       
       
       {
           proName:"Hebes Table" , 
           proPrice:"$133.00",
           proImage:"table3" , 
           proToggle:"table" ,
           proId :"tab3" ,
		   proLove:"tablelove3" , 
		   proPriceInt: 133.00
       },
       
       
       {
           proName:"Hebes Table" , 
           proPrice:"$98.00",
           proImage:"table4" , 
           proToggle:"table" , 
           proId :"tab4" ,
		   proLove:"tablelove4", 
		   proPriceInt: 98.00
       },
       
        
       {
           proName:"Hebes Lamp" , 
           proPrice:"$80.00",
           proImage:"lamp1" , 
           proToggle:"lamp" , 
           proId :"lam1" ,
		   proLove:"lamplove1", 
		   proPriceInt: 80.00
       },
       
        
       {
           proName:"Hebes Lamp" , 
           proPrice:"$110.00",
           proImage:"lamp3" , 
           proToggle:"lamp" ,
           proId :"lam2" ,
		   proLove:"lamplove2" , 
		   proPriceInt: 110.00
       },
       
        
       {
           proName:"Hebes Lamp" , 
           proPrice:"$120.00",
           proImage:"lamp4" , 
           proToggle:"lamp" ,
           proId :"lam3" ,
		   proLove:"lamplove3" , 
		   proPriceInt: 120.00
       },
       
        
       {
           proName:"Hebes Lamp" , 
           proPrice:"$50.00",
           proImage:"lamp5" , 
           proToggle:"lamp" ,
           proId :"lam4" ,
		   proLove:"lamplove4" , 
		   proPriceInt: 50.00
       }
       
       
      
       
   ];
    
    /********************************Quick View ************************************/
  $scope.modelData = function(id)
    {
      for(var i =0 ; i<$scope.product.length ; i++)
          {
              if($scope.product[i].proId == id)
                  {
                      $scope.title = $scope.product[i].proName ;
                      $scope.price = $scope.product[i].proPrice ;
                      $scope.image =$scope.product[i].proImage ;
                      $scope.pId = $scope.product[i].proId ;
                      break ;
                      
                  }
          }
    }
/********************************************************************/ 
  
  
  /**************************login form*********************************/
  $scope.fun= function()
  {
      $scope.user = "one";
  }
  
  /*****************************add item to shopping list array*********************/
  $scope.addShop = function(id)
  {
      if($scope.user == "one")
          {
              for(var i =0 ; i<$scope.product.length ; i++)
          {
              if($scope.product[i].proId == id)
                  {
                    $scope.shoopingList.push($scope.product[i]);
                      break ;
                      
                  }
          } 
              console.log($scope.shoopingList);
          }
    
  }
   $scope.addShop2 = function()
  {
      if($scope.user == "one")
          {
          
                  $scope.shoopingList.push($scope.last);
                    
                      
           
          }
    
  }
  /****************************************************************************/
   
   	/*****************************loveList ***************************************************************/
	
	$scope.love = function(id){
		
		if($scope.user == "one"){
			
			
			for(let s = 0 ; s < $scope.product.length ; s++ )
			{
				if($scope.product[s].proId == id)
					{
						$scope.loveList.push($scope.product[s]);
						break ;
						
					}
				
			}
			
		}
		
    console.log($scope.loveList);
		
	}  
	
	   $scope.addLove2 = function()
  {
      if($scope.user == "one")
          {
          
                  $scope.loveList.push($scope.last);
                    
                      
           
          }
    
  }

	
	
	/************************************no select item  wishlist *******************************************/
	$scope.tryLove = function(){
		
		if($scope.loveList.length > 0 )
		{
			return false  ;
		}
	else{
		return true ;
	}
		
	}
	
    /**********************************************************************************************/
	/************************************no select item  shopping *******************************************/
	$scope.showItemShopping = function(){
		
		if($scope.shoopingList.length > 0 )
		{
			return false  ;
		}
	else{
		return true ;
	}
		
	}
	
    /**********************************************************************************************/
	
    
	/********************************************************************************************/
  
  /*************************TryShow text in cart nav h4 ****************************************/
  $scope.TryShow = function()
  {
	  if($scope.shoopingList.length >0)
		  {
			  return false ; 
		  }
	  else
		  {
			  return true ;
		  }
  }
  
  /************************************************************************/
  
  
  /****************************delete item from shopping list *****************************/
  $scope.deleItem =function(id){
	  
	  for(let j = 0 ; j<$scope.shoopingList.length ; j++)
		  {
			  if($scope.shoopingList[j].proId == id)
				  {
					  $scope.shoopingList.splice(j,1);
					console.log($scope.shoopingList.length);
					  break ;
				  }
		  }
	  
  }
  /**********************************************************************************/
  
  /*********************************delete item from love list ************************/
  $scope.removeItem = function(id)
  {
	  for(let i = 0 ; i<$scope.loveList.length ; i++)
		  {
			  if($scope.loveList[i].proId == id)
				  {
					  $scope.loveList.splice(i , 1);
					  break ;
				  }
		  }
  }
  /*******************************************************************************/
  
  
  /*****************************set class*****************************************/
  $scope.getCSSClass = function(id)
  {
	  for(let i = 0 ; i<$scope.loveList.length ; i++)
		  {
			  if($scope.loveList[i].proId == id)
				  {
					  return "dis" ; 
				  }
		  }
  }
  /********************************************************************************/
  
  
  /***********************************lenght of shopping list ********************************************/
  	$scope.lenm = function()
	{
		return $scope.shoopingList.length ; 
	}
	
	/***********************************lenght of wish list ********************************************/
  	$scope.lenLove = function()
	{
		return $scope.loveList.length ; 
	}
	
	
	/********************************************************************************************/
	
	/***************************disabled item cart  that already in cart *************************/
	$scope.getCartClass = function(id){
		
		for(let i = 0 ; i<$scope.shoopingList.length ; i++)
			{
				if($scope.shoopingList[i].proId == id)
					{
						return "dis";
						
					}
			}
		
	}
	/*********************************************************************************************/
	/*******************************************total price ***************************************/
	$scope.price = function(){
		
		$scope.totprice = 0 ; 
		for(let i = 0 ; i<$scope.shoopingList.length ; i++ )
			{
				$scope.totprice += $scope.shoopingList[i].proPriceInt ; 
			}
		
		return $scope.totprice  ;
	}
	/*********************************************************************************************/
	/********************************check city input *************************************************/
	$scope.checkm= function(){
		if($scope.city.length === 0)
			{
				return true ;
			}
		else if($scope.city == "Other")
			{
				return true ;
			}
		else
			{
				return false ;
			}
	}
	
	
	
	$scope.checkInput= function(){
		if($scope.city === "Other")
			{
				return false ;
			}
		else{
			return true ;
		}
		
	}
	
	/*********************************************************************************************/
	/****************************************check street input *****************************************************/4
	$scope.checkStreet = function(){
		
		if( $scope.city === "Other" || $scope.country === "Other")
			{
				return false ;
			}
		else 
			{
				return true ;
			}
	}
	/*********************************************************************************************/
	/***************************************payment form ******************************************************/
	$scope.chechCity = function()
	{
		if($scope.city === " ")
			{
				return true ;
			}
	}
	/*********************************************************************************************/
	/*************************************check list lenght to order******************************************/
	$scope.ChechItems = function(){
		
		if($scope.shoopingList.length === 0)
			{
				return true ;
			}
	}
	/*********************************************************************************************/

	
});