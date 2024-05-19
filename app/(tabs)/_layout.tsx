import React, { useEffect, useRef } from "react";
import {
	Animated,
	View,
	StyleSheet,
	ScrollView,
	Text,
	SafeAreaView,
} from "react-native";
const TabLayout = () => {
	const fontSizeAnim = useRef(new Animated.Value(0)).current;
	useEffect(() => {
		const animationText = Animated.sequence([
			Animated.timing(fontSizeAnim, {
				toValue: 45,
				duration: 1000,
				useNativeDriver: false,
			}),
			Animated.timing(fontSizeAnim, {
				toValue: 40,
				duration: 500,
				useNativeDriver: false,
			}),
		]);

		setTimeout(() => {
			Animated.loop(animationText).start();
		}, 1000);
	}, [fontSizeAnim]);

	const animCircle = (delay: number) => {
		const circle = useRef(new Animated.Value(0)).current;
		useEffect(() => {
			Animated.loop(
				Animated.sequence([
					Animated.timing(circle, {
						toValue: 0.5,
						duration: 2000,
						delay: delay,
						useNativeDriver: false,
					}),
					Animated.timing(circle, {
						toValue: 0,
						duration: 500,
						useNativeDriver: false,
					}),
				])
			).start();
		}, [circle, delay]);

		return circle;
	};
	const circle1 = animCircle(1000);
	const circle2 = animCircle(1100);
	const circle3 = animCircle(1200);
	const circle4 = animCircle(1300);
	const circle5 = animCircle(1400);
	const circle6 = animCircle(1500);

	const animateStyle = (
		circle: Animated.Value,
		startColor: string,
		endColor: string
	) => {
		const height = circle.interpolate({
			inputRange: [0, 0.05, 0.2, 0.35, 0.5, 0.65, 0.8, 0.95, 1],
			outputRange: [0, 15, 15, 15, 15, 15, 15, 15, 0],
		});

		const width = circle.interpolate({
			inputRange: [0, 0.05, 0.2, 0.35, 0.5, 0.65, 0.8, 0.95, 1],
			outputRange: [0, 15, 15, 15, 15, 15, 15, 15, 0],
		});

		const top = circle.interpolate({
			inputRange: [0, 0.05, 0.2, 0.35, 0.5, 0.65, 0.8, 0.95, 1],
			outputRange: [100, 150, 350, 335, 350, 340, 340, 150, 100],
		});

		const backgroundColor = circle.interpolate({
			inputRange: [0, 0.05, 0.2, 0.35, 0.5, 0.65, 0.8, 0.95, 1],
			outputRange: [
				startColor,
				startColor,
				endColor,
				endColor,
				endColor,
				endColor,
				endColor,
				"#fff",
				startColor,
			],
		});
		return { height, width, top, backgroundColor };
	};

	const sizeAnim = useRef(new Animated.Value(100)).current;

	useEffect(() => {
		const animationHeart = Animated.sequence([
			Animated.timing(sizeAnim, {
				toValue: 140,
				duration: 250,
				useNativeDriver: false,
			}),
			Animated.timing(sizeAnim, {
				toValue: 120,
				duration: 250,
				useNativeDriver: false,
			}),
			Animated.timing(sizeAnim, {
				toValue: 140,
				duration: 250,
				useNativeDriver: false,
			}),
			Animated.timing(sizeAnim, {
				toValue: 100,
				duration: 250,
				useNativeDriver: false,
			}),
		]);
		Animated.loop(animationHeart).start();
	}, [sizeAnim]);

	const fonstSizeAnimButton1 = useRef(new Animated.Value(10)).current;
	const paddingAnimButton1 = useRef(new Animated.Value(10)).current;
	const fonstSizeAnimButton2 = useRef(new Animated.Value(10)).current;
	const paddingAnimButton2 = useRef(new Animated.Value(10)).current;

	useEffect(() => {
		const animation1 = Animated.sequence([
			Animated.parallel([
				Animated.timing(fonstSizeAnimButton1, {
					toValue: 20,
					duration: 2000,
					useNativeDriver: false,
				}),
				Animated.timing(paddingAnimButton1, {
					toValue: 25,
					duration: 2000,
					useNativeDriver: false,
				}),
			]),
			Animated.parallel([
				Animated.timing(fonstSizeAnimButton1, {
					toValue: 10,
					duration: 2000,
					useNativeDriver: false,
				}),
				Animated.timing(paddingAnimButton1, {
					toValue: 10,
					duration: 2000,
					useNativeDriver: false,
				}),
			]),
		]);

		const animation2 = Animated.sequence([
			Animated.parallel([
				Animated.timing(fonstSizeAnimButton2, {
					toValue: 20,
					duration: 1250,
					useNativeDriver: false,
				}),
				Animated.timing(paddingAnimButton2, {
					toValue: 25,
					duration: 1250,
					useNativeDriver: false,
				}),
			]),
			Animated.parallel([
				Animated.timing(fonstSizeAnimButton2, {
					toValue: 10,
					duration: 1250,
					useNativeDriver: false,
				}),
				Animated.timing(paddingAnimButton2, {
					toValue: 10,
					duration: 1250,
					useNativeDriver: false,
				}),
			]),
		]);

		setTimeout(() => {
			Animated.loop(animation1).start();
			Animated.loop(animation2).start();
		}, 1000);
	}, [
		fonstSizeAnimButton1,
		fonstSizeAnimButton2,
		paddingAnimButton1,
		paddingAnimButton2,
	]);

	return (
		<SafeAreaView style={styles.safeArea}>
			<ScrollView contentContainerStyle={styles.scrollView}>
				<View style={styles.textContainer}>
					<Animated.Text style={[styles.text, { fontSize: fontSizeAnim }]}>
						BOUNCE IN
					</Animated.Text>
				</View>

				<View style={styles.animationContainer}>
					<Animated.View
						style={[
							styles.circle,
							{ left: 100 },
							animateStyle(circle1, "aqua", "rgb(146, 211, 211)"),
						]}
					/>
					<Animated.View
						style={[
							styles.circle,
							{ left: 125 },
							animateStyle(circle2, "rgb(183, 69, 69)", "brown"),
						]}
					/>
					<Animated.View
						style={[
							styles.circle,
							{ left: 150 },
							animateStyle(circle3, "rgb(60, 151, 215)", "rgb(0, 118, 228)"),
						]}
					/>
					<Animated.View
						style={[
							styles.circle,
							{ left: 175 },
							animateStyle(circle4, "rgb(246, 197, 111)", "rgb(206, 161, 25)"),
						]}
					/>
					<Animated.View
						style={[
							styles.circle,
							{ left: 200 },
							animateStyle(circle5, "rgb(113, 119, 230)", "rgb(35, 66, 217)"),
						]}
					/>
					<Animated.View
						style={[
							styles.circle,
							{ left: 225 },
							animateStyle(circle6, "rgb(236, 129, 188)", "rgb(230, 49, 178)"),
						]}
					/>
				</View>

				<View style={styles.heartContainer}>
					<Animated.Image
						source={require("../../assets/images/sirt.png")}
						style={[styles.image, { width: sizeAnim, height: sizeAnim }]}
					></Animated.Image>
				</View>

				<View style={styles.btnContainer}>
					<Animated.Text
						style={[
							styles.text1,
							{
								fontSize: fonstSizeAnimButton1,
								paddingVertical: paddingAnimButton1,
								paddingHorizontal: paddingAnimButton1.interpolate({
									inputRange: [10, 25],
									outputRange: [25, 35],
								}),
							},
						]}
					>
						<Text style={styles.text}>This scales and stays</Text>
					</Animated.Text>
					<Animated.Text
						style={[
							styles.text2,
							{
								fontSize: fonstSizeAnimButton2,
								paddingVertical: paddingAnimButton2,
								paddingHorizontal: paddingAnimButton2.interpolate({
									inputRange: [10, 25],
									outputRange: [25, 35],
								}),
							},
						]}
					>
						<Text style={styles.text}>This scales and stays</Text>
					</Animated.Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
	},
	scrollView: {
		flexGrow: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	textContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 30,
		height: 100,
	},
	text: {
		fontFamily: "sans-serif",
		fontSize: 40,
		color: "#3fdade",
	},
	animationContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 2,
		borderColor: "black",
		height: 400,
		width: 300,
		marginBottom: 30,
	},
	circle: {
		position: "absolute",
		borderRadius: 50,
	},
	heartContainer: {
		height: 400,
		width: 300,
		borderWidth: 2,
		borderColor: "black",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		margin: "auto",
		marginBottom: 30,
	},
	image: {
		width: 100,
		height: 100,
	},
	btnContainer: {
		height: 500,
		width: 300,
		margin: "auto",
		borderWidth: 2,
		borderColor: "green",
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "space-evenly",
	},
	text1: {
		backgroundColor: "rgb(48, 167, 167)",
		borderRadius: 5,
		color: "white",
	},
	text2: {
		backgroundColor: "rgb(209, 63, 55)",
		borderRadius: 5,
		color: "white",
	},
});

export default TabLayout;
