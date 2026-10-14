
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Recipe {
  id: number;
  author: string;
  title: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  likes: number;
  liked: boolean;
  saved: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  activePage: 'home' | 'add' | 'saved' = 'home';
  expandedRecipeId: number | null = null;
  searchText = '';
  activeFilter: 'all' | 'popular' = 'all';

  newAuthor = '';
  newTitle = '';
  newDescription = '';
  newImage = '';
  newIngredients = '';
  newInstructions = '';

  recipes: Recipe[] = [
    {
      id: 1, author: 'Priya', title: 'Masala Dosa',
      description: 'Crispy dosa filled with flavorful potato masala.',
      image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=85',
      ingredients: ['2 cups dosa batter', '3 potatoes', '1 onion', 'Mustard seeds', 'Curry leaves', 'Salt and oil'],
      instructions: ['Boil and mash the potatoes.', 'Cook onion, mustard seeds and curry leaves in oil.', 'Mix in the potatoes and salt.', 'Spread dosa batter on a hot pan.', 'Add the potato filling, fold and serve.'],
      likes: 24, liked: false, saved: false
    },
    {
      id: 2, author: 'Anu', title: 'Paneer Butter Masala',
      description: 'Soft paneer in a rich, creamy tomato gravy.',
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85',
      ingredients: ['200 g paneer', '3 tomatoes', '1 onion', '1 tbsp butter', 'Cream', 'Garam masala'],
      instructions: ['Cook chopped onion and tomatoes.', 'Blend into a smooth gravy.', 'Add butter and spices.', 'Add paneer and simmer for 5–7 minutes.', 'Finish with cream and serve.'],
      likes: 31, liked: false, saved: false
    },
    {
      id: 3, author: 'Kavya', title: 'Vegetable Biryani',
      description: 'Aromatic rice cooked with vegetables and spices.',
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=85',
      ingredients: ['2 cups basmati rice', 'Mixed vegetables', '1 onion', 'Biryani masala', 'Mint leaves', 'Salt'],
      instructions: ['Wash and soak the rice.', 'Fry onion with spices.', 'Add vegetables and biryani masala.', 'Add rice and water.', 'Cook until the rice is fluffy.'],
      likes: 42, liked: false, saved: false
    },
    {
      id: 4, author: 'Meena', title: 'Idli and Sambar',
      description: 'Soft steamed idlis served with comforting sambar.',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=85',
      ingredients: ['Idli batter', '1 cup toor dal', 'Mixed vegetables', 'Sambar powder', 'Tamarind', 'Salt'],
      instructions: ['Pour batter into greased idli moulds.', 'Steam until cooked.', 'Cook dal and vegetables.', 'Add tamarind water and sambar powder.', 'Simmer and serve with idlis.'],
      likes: 19, liked: false, saved: false
    },
    {
      id: 5, author: 'Divya', title: 'Chole Bhature',
      description: 'Spicy chickpea curry served with fluffy fried bread.',
      image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=900&q=85',
      ingredients: ['2 cups chickpeas', '2 tomatoes', '1 onion', 'Chole masala', 'Flour', 'Yogurt'],
      instructions: ['Soak chickpeas overnight and cook until soft.', 'Cook onion, tomatoes and chole masala.', 'Add chickpeas and simmer.', 'Prepare a dough with flour and yogurt.', 'Roll and fry bhature; serve hot.'],
      likes: 27, liked: false, saved: false
    },
    {
      id: 6, author: 'Sneha', title: 'Palak Paneer',
      description: 'Paneer cubes in a smooth spinach gravy.',
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85',
      ingredients: ['2 cups spinach', '200 g paneer', '1 onion', '2 tomatoes', 'Garlic', 'Salt and spices'],
      instructions: ['Blanch spinach and blend it.', 'Cook onion, garlic and tomatoes.', 'Add the spinach puree and spices.', 'Add paneer cubes.', 'Simmer for a few minutes and serve.'],
      likes: 22, liked: false, saved: false
    },
    {
      id: 7, author: 'Lakshmi', title: 'Ven Pongal',
      description: 'A comforting rice and lentil dish with pepper and cumin.',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85',
      ingredients: ['1 cup rice', '½ cup moong dal', 'Black pepper', 'Cumin', 'Cashews', 'Ghee'],
      instructions: ['Wash rice and dal.', 'Pressure-cook with water until soft.', 'Heat ghee in a pan.', 'Add pepper, cumin and cashews.', 'Mix into the cooked rice and serve.'],
      likes: 16, liked: false, saved: false
    },
    {
      id: 8, author: 'Raji', title: 'Gulab Jamun',
      description: 'Soft milk-based sweets soaked in fragrant sugar syrup.',
      image: 'https://images.unsplash.com/photo-1666190092159-4b7c3c3c2c5a?auto=format&fit=crop&w=900&q=85',
      ingredients: ['1 cup milk powder', '¼ cup flour', 'Milk', 'Sugar', 'Water', 'Cardamom'],
      instructions: ['Make a soft dough with milk powder, flour and milk.', 'Shape into small smooth balls.', 'Prepare sugar syrup with cardamom.', 'Fry the balls on low heat until golden.', 'Soak in warm syrup before serving.'],
      likes: 35, liked: false, saved: false
    },
    {
      id: 9, author: 'Nithya', title: 'Medu Vada',
      description: 'Crispy outside and soft inside South Indian lentil fritters.',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85',
      ingredients: ['1 cup urad dal', 'Green chilli', 'Ginger', 'Curry leaves', 'Salt', 'Oil'],
      instructions: ['Soak urad dal for a few hours.', 'Grind into a thick batter.', 'Mix in chilli, ginger, curry leaves and salt.', 'Shape into rings with wet hands.', 'Deep-fry until golden and crisp.'],
      likes: 21, liked: false, saved: false
    },
    {
      id: 10, author: 'Pavithra', title: 'Aloo Paratha',
      description: 'Golden flatbread stuffed with spiced mashed potatoes.',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=85',
      ingredients: ['2 cups wheat flour', '3 potatoes', 'Green chilli', 'Coriander leaves', 'Garam masala', 'Ghee'],
      instructions: ['Prepare a soft dough with flour and water.', 'Boil and mash the potatoes.', 'Mix potatoes with spices and coriander.', 'Stuff the dough and roll into flatbreads.', 'Cook on a hot pan with ghee.'],
      likes: 28, liked: false, saved: false
    }
  ];

  ngOnInit(): void {
    this.loadSavedRecipes();
  }

  get filteredRecipes(): Recipe[] {
    let result = this.recipes;

    if (this.activePage === 'saved') {
      result = result.filter(recipe => recipe.saved);
    }

    const search = this.searchText.trim().toLowerCase();

    if (search) {
      result = result.filter(recipe =>
        recipe.title.toLowerCase().includes(search) ||
        recipe.author.toLowerCase().includes(search) ||
        recipe.description.toLowerCase().includes(search)
      );
    }

    if (this.activeFilter === 'popular') {
      result = [...result].sort((a, b) => b.likes - a.likes);
    }

    return result;
  }

  openPage(page: 'home' | 'add' | 'saved'): void {
    this.activePage = page;
    this.searchText = '';
    this.activeFilter = 'all';
    this.expandedRecipeId = null;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleRecipe(recipe: Recipe): void {
    this.expandedRecipeId =
      this.expandedRecipeId === recipe.id ? null : recipe.id;
  }

  toggleLike(recipe: Recipe, event: Event): void {
    event.stopPropagation();

    recipe.liked = !recipe.liked;
    recipe.likes += recipe.liked ? 1 : -1;
  }

  toggleSave(recipe: Recipe, event: Event): void {
    event.stopPropagation();
    recipe.saved = !recipe.saved;
    this.storeSavedRecipes();
  }

  addRecipe(): void {
    if (
      !this.newAuthor.trim() ||
      !this.newTitle.trim() ||
      !this.newDescription.trim() ||
      !this.newIngredients.trim() ||
      !this.newInstructions.trim()
    ) {
      alert('Please fill in your name, recipe name, description, ingredients and cooking instructions.');
      return;
    }

    const recipe: Recipe = {
      id: Date.now(),
      author: this.newAuthor.trim(),
      title: this.newTitle.trim(),
      description: this.newDescription.trim(),
      image: this.newImage.trim() ||
        'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=85',
      ingredients: this.newIngredients
        .split('\n')
        .map(item => item.trim())
        .filter(item => item.length > 0),
      instructions: this.newInstructions
        .split('\n')
        .map(item => item.trim())
        .filter(item => item.length > 0),
      likes: 0,
      liked: false,
      saved: false
    };

    this.recipes.unshift(recipe);
    this.saveRecipesToStorage();

    this.newAuthor = '';
    this.newTitle = '';
    this.newDescription = '';
    this.newImage = '';
    this.newIngredients = '';
    this.newInstructions = '';

    this.openPage('home');
    alert('Your recipe has been added successfully!');
  }

  private loadSavedRecipes(): void {
    try {
      const savedIds = JSON.parse(
        localStorage.getItem('sharemyrecipe_saved_v2') || '[]'
      ) as number[];

      this.recipes.forEach(recipe => {
        recipe.saved = savedIds.includes(recipe.id);
      });

      const storedRecipes = localStorage.getItem('sharemyrecipe_custom_v1');

      if (storedRecipes) {
        const customRecipes = JSON.parse(storedRecipes) as Recipe[];
        const customIds = new Set(this.recipes.map(recipe => recipe.id));

        customRecipes.forEach(recipe => {
          if (!customIds.has(recipe.id)) {
            this.recipes.push(recipe);
          }
        });
      }
    } catch {
      // The website can still work if browser storage is unavailable.
    }
  }

  private storeSavedRecipes(): void {
    try {
      localStorage.setItem(
        'sharemyrecipe_saved_v2',
        JSON.stringify(this.recipes.filter(recipe => recipe.saved).map(recipe => recipe.id))
      );
    } catch {
      // Ignore storage errors.
    }
  }

  private saveRecipesToStorage(): void {
    try {
      const customRecipes = this.recipes.filter(recipe => recipe.id > 1000000000000);
      localStorage.setItem('sharemyrecipe_custom_v1', JSON.stringify(customRecipes));
    } catch {
      // Ignore storage errors.
    }
  }
}
