package cn.haloop.mock.script

import cn.haloop.mock.polyglot.javascript.JavascriptEngine
import org.junit.jupiter.api.Test

/**
 * @author yangtuo
 */
class ScriptTest {


    @Test
    fun testJavascript() {
        val engine = JavascriptEngine()
        engine.put("name", "haloop")

        val script = """
            var message = "Hello, " + name;
            message;
        """.trimIndent()

        val result = engine.eval(script)
        println(result.asString())
    }

    @Test
    fun setupHttpRequestHeaders() {
        val engine = JavascriptEngine()
        engine.put("headers", mapOf("Content-Type" to "application/json"))

        val script = """
            var headers = {
                "Content-Type": "application/json",
                "Authorization": "Bearer token"
            };
            headers;
        """.trimIndent()

        val result = engine.eval(script)
        println(result)
    }
}