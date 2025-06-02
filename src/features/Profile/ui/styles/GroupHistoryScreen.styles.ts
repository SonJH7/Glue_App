import { StyleSheet } from 'react-native';
import { colors, semanticColors } from 'src/app/styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: semanticColors.mainbackground,
  },
  scrollView: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
  },
  row3: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginHorizontal: 20,
  },
  column: {
    marginLeft: 15,
  },
  column2: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 20,
  },
  column3: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  view: {
    backgroundColor: semanticColors.surface,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  view2: {
    marginTop: 20,
    marginBottom: 40,
  },
  image: {
    width: 24,
    height: 24,
  },
  image2: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 10,
  },
  text2: {
    fontSize: 16,
    fontWeight: '500',
    color: semanticColors.textSecondary,
    marginRight: 20,
  },
  text3: {
    fontSize: 16,
    fontWeight: '500',
    color: semanticColors.textSecondary,
  },
  text4: {
    fontSize: 14,
    color: semanticColors.textSecondary,
  },
  text5: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 5,
  },
  box: {
    height: 1,
    backgroundColor: semanticColors.border,
    marginTop: 10,
  },
  box2: {
    flex: 1,
  },
  box3: {
    width: 80,
    height: 2,
    backgroundColor: semanticColors.primary,
    marginTop: 5,
  },
  box3Right: {
    marginLeft: 100,
  },
  box4: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: semanticColors.border,
    marginRight: 5,
  },
  box5: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: semanticColors.primary,
    marginRight: 5,
  },
  box6: {
    height: 1,
    backgroundColor: semanticColors.border,
    marginTop: 15,
    marginHorizontal: 20,
  },
  box7: {
    height: 1,
    backgroundColor: semanticColors.border,
    marginHorizontal: 20,
  },
  activeTab: {
    color: semanticColors.primary,
    fontWeight: '600',
  },
}); 