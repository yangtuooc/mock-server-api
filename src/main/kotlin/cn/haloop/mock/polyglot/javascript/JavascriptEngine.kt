package cn.haloop.mock.polyglot.javascript

import org.graalvm.polyglot.Context
import org.graalvm.polyglot.Engine
import org.graalvm.polyglot.Value

/**
 * @author yangtuo
 */

const val JAVASCRIPT = "js"

class JavascriptEngine {

    private val ctx: Context

    init {
        val engine = Engine.newBuilder()
            .option("engine.WarnInterpreterOnly", "false")
//            .option("js.commonjs-require", "true") // https://www.graalvm.org/latest/reference-manual/js/Modules/ //
//            .allowExperimentalOptions(true)
            .build()
        ctx = Context.newBuilder(JAVASCRIPT)
            .engine(engine)
            .build()
    }

    fun eval(script: String): Value {
        return ctx.eval(JAVASCRIPT, script)
    }

    fun close() {
        ctx.close(true)
    }

    fun put(key: String, value: Any) {
        ctx.getBindings(JAVASCRIPT).putMember(key, value)
    }

    fun putAll(map: Map<String, Any>) {
        ctx.getBindings(JAVASCRIPT).putMember("map", map)
        ctx.eval(JAVASCRIPT, "for (let key in map) { this[key] = map[key]; }")
    }

    fun get(key: String): Any? {
        return ctx.getBindings(JAVASCRIPT).getMember(key)
    }

    fun remove(key: String) {
        ctx.getBindings(JAVASCRIPT).removeMember(key)
    }

}