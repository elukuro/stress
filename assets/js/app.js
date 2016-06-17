
/* define the angular app name */
var app=angular.module('strest',[]);


/* define controller strestController */
app.controller('strestController',['$scope','stresService',function($scope,stresService){
	$scope.title="How stressed are you ?";
	$scope.caption="stress, as difficult as it might be to accept, is an important part of our lives, it can bring out the best in us, motivating us towards ever greater heights of personal achivement, but to much stress, or feeling unable to cope with it can take a serious toll on our wellbeing.";
	/* how hide the start element */
	$scope.start=false;
	/* how to trigger hide start element */
	$scope.startTest=function(){
	$scope.start=true;
    $scope.stress_index=0;
	}

	/* variable for result */
	$scope.result=false;
	$scope.resultItem=null;

	/* define scope for stress service */
	$scope.stressQuestion=stresService.questionList;
	var length=$scope.stressQuestion.length;
	
	/* define next button */
    $scope.stress_index=0;
	$scope.next=function(answer){
 	    	console.log(answer);
	    	console.log('current index is'+$scope.stress_index);
	    	switch(answer){

	    		/* case layer 1 */
	    		case 'I havent sleep this week' :
	    			$scope.stress_index++;
	    		break;

	    		case 'Not great- still felt tired when I woke up':
	    			$scope.stress_index+=2;
	    		break;

	    		case 'good- woke up feeling refreshed and renewall':
	    			$scope.stress_index+=3;
	    		break;
	    		
	    		/* case layer 2 1st question */

	    		case 'Not a day goes by without becoming irrationally angry' :
	    			$scope.stress_index+=3;
	    		break;

	    		case 'I have my moment but Ok' :
	    			$scope.stress_index+=4;
	    		break; 

	    		/* case layer 2 2nd question */
	    		case 'a 100 and 1 things' :
	    			$scope.stress_index-=1;
	    		break;

	    		case 'its nothing really dont worry about it' :
	    			$scope.stress_index+=3;
	    		break;

	    		case 'not that I know of' :
	    			$scope.stress_index+=1;
	    		break;

	    		/* case layer 2 3rd question */

	    		case 'a while, with a lot of tossing and turning' :
	    			$scope.stress_index+=2;
	    		break;

	    		case 'as soon as my head met the pillow' :
	    			$scope.stress_index+=3;
	    		break;

	    		/* case layer 3 1 question */

	    		case 'Basicaly non exsistent, I struggle to form relationship' :
	    			$scope.stress_index+=3;
	    		break;

	    		case 'Good I am very active meeting people' :
	    			$scope.stress_index+=3;
	    		break;

	    		case 'Not great I sometimes fell very isolated' :
	    			$scope.stress_index+=4;
	    		break;

	    		/* case layer 3 2 question */

	    		case 'a lot more than usual of late' :
	    			$scope.stress_index-=1;
	    		break;

	    		case 'more or less' :
	    			$scope.stress_index+=3;
	    		break;

	    		case 'not overdo and stick with save limit' :
	    			$scope.stress_index+=1;
	    		break;

	    		/* case layer 3 3 question */

	    		case 'regulary forget to eat or simply not hungry' :
	    			$scope.stress_index+=2;
	    		break;

	    		case 'good I eat regular nutrition' :
	    			$scope.stress_index+=3;
	    		break;

	    		case 'erratic, sometime skip meal or ninge eat' :
	    			$scope.stress_index+=2;
	    		break;

	    		/* case layer 4 1 question */

	    		case 'yes I have strong support network of friend and family' :
	    			$scope.stress_index+=1;
	    		break;

	    		case 'I try but I am affraid that no one will care' :
    				$scope.stress_index+=1;
	    		break;

	    		case 'no I just end up snapping at people' :
	    			console.log("very stress");
	    			$scope.start=false;
	    			$scope.result=true;
	    			$scope.resultItem="very stress";
	    		break;

	    		/* case layer 4 2 question */

	    		case 'I honestly fell awful and always on edge':
	    			console.log("stress");
	    			$scope.start=false;
	    			$scope.result=true;
	    			$scope.resultItem="stress";
	    		break;

	    		case 'some days are better than others' :
	    			console.log("little stress");
	    			$scope.start=false;
	    			$scope.result=true;
	    			$scope.resultItem="little stress";
	    		break;

	    		case 'I fell strong and good in health' :
	    			$scope.stress_index+=1;
	    		break;

	    		/* case layer 4 3 question */
	    		case 'a lot of nail-biting and procastination, but it gets there' :
	    			console.log("a litle stress");
	    			$scope.start=false;
	    			$scope.result=true;
	    			$scope.resultItem="a little stress";
	    		break;

	    		case 'It is fine I can prioritise and work through it' :
	    			console.log("calm");
	    			$scope.start=false;
	    			$scope.result=true;
	    			$scope.resultItem="calm";
	    		break;

	    		case 'I fall to bits and panic or get visibly worked up' :
	    			$scope.stress_index-=1;
	    		break;

	    }
    }

}]);

/* define service for list of question */

app.service('stresService',function(){
	var self={
		'stress_index':0,
		'questionList':[
			
			/* first layer question */
			{
				//question 0
				'question':"how did you sleep last night ?",
				'answerList':[
					{'answer':'I havent sleep this week'},
					{'answer':'Not great- still felt tired when I woke up'},
					{'answer':'good- woke up feeling refreshed and renewall'}						
				]
			},

			/* second layer question */
			{
				//question 1	
				'question':"how your mood generally ?",
				'answerList':[
					{'answer':'Not a day goes by without becoming irrationally angry'},
					{'answer':'I have my moment but Ok'},
				]
			},

			{
				//question 2		
				'question':"Is something weighing on your mind ?",
				'answerList':[
					{'answer':'a 100 and 1 things'},
					{'answer':'its nothing really dont worry about it'},
					{'answer':'not that I know of'},
				]
			},

			{
				//question 3	
				'question':"How long did it take you to doze off ?",
				'answerList':[
					{'answer':'a while, with a lot of tossing and turning'},
					{'answer':'as soon as my head met the pillow'},
				]
			},

			/* third layer question */

			{
				//question 4	
				'question':"How your social Life ?",
				'answerList':[
					{'answer':'Basicaly non exsistent, I struggle to form relationship'},
					{'answer':'Good I am very active meeting people'},
					{'answer':'Not great I sometimes fell very isolated'},
				]
			},

			{
				//question 5	
				'question':"would you say your snacking habits are normal ?",
				'answerList':[
					{'answer':'a lot more than usual of late'},
					{'answer':'more or less'},
					{'answer':'not overdo and stick with save limit'},
				]
			},

			{
				//question 6	
				'question':"How your apprtite ?",
				'answerList':[
					{'answer':'regulary forget to eat or simply not hungry'},
					{'answer':'good I eat regular nutrition'},
					{'answer':'erratic, sometime skip meal or ninge eat'},
				]
			},

			{
				//question 7	
				'question':"Are you able to share your feelings ?",
				'answerList':[
					{'answer':'yes I have strong support network of friend and family'},
					{'answer':'I try but I am affraid that no one will care'},
					{'answer':'no I just end up snapping at people'},
				]
			},

			{
				//question 8	
				'question':"Do you feel well in your self ?",
				'answerList':[
					{'answer':'I honestly fell awful and always on edge'},
					{'answer':'some days are better than others'},
					{'answer':'I fell strong and good in health'},
				]
			},

			{
				//question 9	
				'question':"A big deadline is looming, how do you handle it ?",
				'answerList':[
					{'answer':'a lot of nail-biting and procastination, but it gets there'},
					{'answer':'It is fine I can prioritise and work through it'},
					{'answer':'I fall to bits and panic or get visibly worked up'},
						
				]
			},




		],
	
	}
	return self;
});