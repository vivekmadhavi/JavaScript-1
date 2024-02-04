function sumfinder()
		{
			event.preventDefault();
			let num=document.getElementById("num");
			let ans=document.getElementById("ans");

			let action = document.activeElement.value;
			let n = parseFloat(num.value);

			if (action == "m1")
			{
				//while loop 
				let i=1, sum=0.0
				while(i<=n)
				{
					sum= sum +i;
					i++;
				}
				let msg= "sum1 =" + sum;
				ans.innerHTML= msg;
			}
			else if (action == "m2")
			{
				//do while loop -->exit controlled
				let i=1, sum=0.0;
				do
				{
					sum= sum +i;
					i++;
				} while(i<=n);
				let msg= "sum2 =" + sum;
				ans.innerHTML= msg;
				

			}	
			else
			{
				//for loop
				let sum=0.0;
				for(let i=1; i<=n; i++)
				{
					sum= sum + i;
				}
				let msg = "sum3 =" + sum;
				ans.innerHTML=msg;
				
			}
			
		}