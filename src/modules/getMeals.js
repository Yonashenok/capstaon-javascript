import fetchPro from './fetchPro.js';

const mealContainer = document.querySelector('.meal-container');

const getMeals = async () => {
  const { meals } = await fetchPro(
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=vegetarian'
  );
  // const markUp = meals
  //   ?.map((show) => {
  //     return `
  //       <div class="flex  flex-col flex-center meal-card">
  //           <div><img class="meal-img" src="" alt="" /></div>
  //             <p class="space">${show.strMeal}</p>
  //               <div class="like flex flex-center">
  //               <button class="like-btn" data-show= "${show.idMeal}" ><i class="fa-sharp fa-regular fa-heart fa-xl"></i></button>
  //               <div class="flex"><p class="like-${show.idMeal}" >5</p><p>like</p></div>
  //               </div>
  //           <button data-tap= "${show.idMeal}" class="btn btn-comment">Comment</button>
  //       </div>
  //       `;
  //   })
  //   .join('');
  // mealContainer.insertAdjacentHTML('afterbegin', markUp);

  //   mealContainer.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     const id = e.target.dataset.tap;
  //     if (id) {
  //       overly.classList.toggle('hidden');
  //       popComment(meals, id);
  //     }
  //   });
};
export default getMeals;
