import { View, Text, Image, ScrollView, StyleSheet, Pressable } from 'react-native';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';

const movies = [
  {
    title: 'Vingadores: Ultimato',
    image: 'https://wp.ufpel.edu.br/empauta/files/2019/05/vingadores-ultimato-poster.jpg',
    description: 'No final épico da Saga do Infinito, os Vingadores enfrentam o vilão mais poderoso do universo, Thanos. Quando eventos devastadores eliminam metade da população mundial e dividem suas fileiras, o resto dos heróis lutam para avançar. Mas eles devem se unir para restaurar a ordem e a harmonia no universo e trazer de volta seus entes queridos.',
    budget: '400000000',
    rating: '8.4',
    duration: '181 min',
    release: '2019-04-25',
    cast: [
      {
        name: 'Robert Downey Jr.',
        role: 'Tony Stark - Homem de Ferro',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg'
      },
      {
        name: 'Chris Evans',
        role: 'Steve Rogers - Capitão América',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeuBrW_sElLZ9S0xHhcEk5QdvFA-LjelEozQ&s'
      },
      {
        name: 'Mark Ruffalo',
        role: 'Bruce Banner - Hulk',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Mark_Ruffalo_%2836243137665%29_%28cropped%29.jpg'
      },
      {
        name: 'Chris Hemsworth',
        role: 'Thor',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg/800px-Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg'
      },
      {
        name: 'Scarlett Johansson',
        role: 'Natasha Romanoff - Viúva Negra',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%29_%28cropped%29.jpg/640px-Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%29_%28cropped%29.jpg'
      },
      {
        name: 'Jeremy Renner',
        role: 'Clint Barton - Gavião Arqueiro',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Jeremy_Renner_by_Gage_Skidmore.jpg/1200px-Jeremy_Renner_by_Gage_Skidmore.jpg'
      },
      {
        name: 'Brie Larson',
        role: 'Carol Danvers - Capitã Marvel',
        image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/230638_v9_bb.jpg'
      },
      {
        name: 'Paul Rudd',
        role: ' Scott Lang - Homem-Formiga',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Paul_Rudd_and_Kate_Mara_at_the_2024_Toronto_International_Film_Festival_8.jpg'
      },
      {
        name: 'Don Cheadle',
        role: 'James Rhodes - Máquina de Combate',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Don_Cheadle_at_Jimmy_Kimmel_Live%21_%28cropped%29.jpg'
      },
      {
        name: 'Karen Gillan',
        role: 'Nebulosa',
        image: 'https://resizing.flixster.com/VO-h3pUXPRbEkHW72PoRaTxsGWY=/218x280/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/572089_v9_bd.jpg'
      },
      {
        name: 'Josh Brolin',
        role: 'Thanos',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Josh_Brolin_Berlin_2016.jpg'
      }
    ]
  }
];

export default function MovieDetailsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.backButton}>
          <ChevronLeft color="#000" size={24} />
          <Text style={styles.backText}>Detalhes</Text>
        </Pressable>
      </View>

      <Image
        source={{ uri: movies[0].image }}
        style={styles.coverImage}
        resizeMode="cover"
      />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{movies[0].title}</Text>
        <Text style={styles.description}>{movies[0].description}</Text>

        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statLabel}>Orçamento:</Text>
            <Text style={styles.statValue}>
              ${parseInt(movies[0].budget).toLocaleString()}
            </Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statLabel}>Nota:</Text>
            <Text style={styles.statValue}>{movies[0].rating}</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statLabel}>Duração:</Text>
            <Text style={styles.statValue}>{movies[0].duration}</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statLabel}>Lançamento:</Text>
            <Text style={styles.statValue}>{movies[0].release}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Atores</Text>
        {movies[0].cast.map((actor, index) => (
          <Pressable key={index} style={styles.actorCard}>
            <Image
              source={{ uri: actor.image }}
              style={styles.actorImage}
              resizeMode="cover"
            />
            <View style={styles.actorInfo}>
              <Text style={styles.actorName}>{actor.name}</Text>
              <Text style={styles.actorRole}>{actor.role}</Text>
            </View>
            <ChevronRight color="#666" size={20} />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    paddingTop: 48,
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: '#fff',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },
  coverImage: {
    width: '100%',
    height: 300,
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 16,
  },
  statsContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  stat: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  statValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  },
  actorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  actorInfo: {
    flex: 1,
    marginLeft: 12,
  },
  actorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  actorRole: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});