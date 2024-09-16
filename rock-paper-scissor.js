let ob=JSON.parse(localStorage.getItem('ob'));
        
        ob={
          Win:0,
          Lose:0,
          Tie:0
        };
      up();
      document.body.addEventListener('keydown', (event)=>{
       if(event.key==='r')
        {
          playermove('rock');
        }  
        else if(event.key==='p')
        {
          playermove('paper');
        }
        else if(event.key==='s')
          {
            playermove('scissor');
          }
      })
      document.querySelector('.rok').addEventListener('click',()=>{playermove('rock')});
      document.querySelector('.sci').addEventListener('click',()=>{playermove('scissor')});
      document.querySelector('.pap').addEventListener('click',()=>{playermove('paper')});
      let autoplay=false;
      let id;
      function auto()
      {
        if(!autoplay)
        {
          id=setInterval(()=>   //Arrow function '=>'
         {
          const type=systemmove();
          playermove(type);
        },1000 );
        autoplay=true;
        }
        else{
          clearInterval(id);
          autoplay=false;
        }
      }
     
      function playermove(type)
      {
        const sys=systemmove();
        let result=' ';
        if(type==='rock')
        {
          if(sys==='rock')
          result='Match Tie';
          else if(sys=='paper')
            result='You Lose';
          else 
           result='You Won';
        }
        if(type==='paper')
        {
          if(sys==='paper')
            result='Match Tie';
          else if(sys==='rock')
            result='You Won';
          else 
            result='You Lose';
        }
        if(type==='scissor')
        {
          if(sys==='scissor')
            result='Match Tie';
          else if(sys==='paper')
            result='You Won';
          else 
            result='You Lose';
        }
        
        if(result==='You Won')
        {
          ob.Win+=1;
        }
        else if(result==='You Lose')
          {ob.Lose+=1;

          }

        else if(result==='Match Tie')
          {ob.Tie+=1;

          }
        localStorage.setItem('ob',JSON.stringify(ob));
        document.querySelector('.result').innerHTML=`${result}`;
        document.querySelector('.move').innerHTML=`You choose<img src="${type}.png" class="c"> opponent choose<img src="${sys}.png" class="c">`;
        up();
       

      }
      function up()
        {
          
        document.querySelector('.update').innerHTML=`Win: ${ob.Win},Lose: ${ob.Lose},Tie: ${ob.Tie}.`;
        }
      function systemmove()
      {
        const no=Math.random()
        let ch=''; 
        if(no>0 && no<=1/3)
        {
          ch='rock';
        }
        else if(no>1/3 && no<=2/3)
        {
          ch='paper';
        }
        else{
          ch='scissor';
        }
        return ch;
      }