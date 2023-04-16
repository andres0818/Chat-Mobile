import { useState } from "react";
import { Image, SafeAreaView, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../styles/form";
import { onHandleLogin, onHandleSignup } from "../firebase/services";
const backImage = require("../img/backImage.png");

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [isLogin, setIsLogin] = useState(true);

  return (
    <View style={styles.container}>
      <Image source={backImage} style={styles.backImage} />
      <View style={styles.whiteSheet}>
        <SafeAreaView style={styles.form}>
          <Text style={styles.title}>{isLogin ? "Login" : "Register"}</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoFocus={true}
            value={user.email}
            onChangeText={(text) => setUser({ ...user, email: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
            value={user.password}
            onChangeText={(text) => setUser({ ...user, password: text })}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              isLogin ? onHandleLogin(user) : onHandleSignup(user)
            }
          >
            <Text style={styles.textButton}>
              {isLogin ? "Login" : "Register"}
            </Text>
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={styles.textDefault}>
              {isLogin ? "Don't " : "I"} have an account?
            </Text>
            <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
              <Text style={styles.signUp}>
                {isLogin ? " sign up" : " Login"}
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default Login;
