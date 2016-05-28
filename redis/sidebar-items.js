initSidebarItems({"enum":[["ConnectionAddr","Defines the connection address."],["ErrorKind","An enum of all error kinds."],["NumericBehavior","Helper enum that is used in some situations to describe the behavior of arguments in a numeric context."],["Value","Internal low-level redis value enum."]],"fn":[["cmd","Shortcut function to creating a command with a single argument."],["from_redis_value","A shortcut function to invoke `FromRedisValue::from_redis_value` to make the API slightly nicer."],["pack_command","Packs a bunch of commands into a request.  This is generally a quite useless function as this functionality is nicely wrapped through the `Cmd` object, but in some cases it can be useful.  The return value of this can then be send to the low level `ConnectionLike` methods."],["parse_redis_url","This function takes a redis URL string and parses it into a URL as used by rust-url.  This is necessary as the default parser does not understand how redis URLs function."],["parse_redis_value","Parses bytes into a redis value."],["pipe","Shortcut for creating a new pipeline."],["transaction","This function simplifies transaction management slightly.  What it does is automatically watching keys and then going into a transaction loop util it succeeds.  Once it goes through the results are returned."]],"struct":[["Client","The client type."],["Cmd","Represents redis commands."],["Connection","Represents a stateful redis TCP connection."],["ConnectionInfo","Holds the connection information that redis should use for connecting."],["InfoDict","An info dictionary type."],["Iter","Represents a redis iterator."],["Msg","Represents a pubsub message."],["Parser","The internal redis response parser."],["Pipeline","Represents a redis command pipeline."],["PubSub","Represents a pubsub connection."],["RedisError","Represents a redis error.  For the most part you should be using the Error trait to interact with this rather than the actual struct."],["Script","Represents a lua script."],["ScriptInvocation","Represents a prepared script call."]],"trait":[["Commands","Implements common redis commands for connection like objects.  This allows you to send commands straight to a connection or client.  It is also implemented for redis results of clients which makes for very convenient access in some basic cases."],["ConnectionLike","Implements the \"stateless\" part of the connection interface that is used by the different objects in redis-rs.  Primarily it obviously applies to `Connection` object but also some other objects implement the interface (for instance whole clients or certain redis results)."],["FromRedisValue","This trait is used to convert a redis value into a more appropriate type.  While a redis `Value` can represent any response that comes back from the redis server, usually you want to map this into something that works better in rust.  For instance you might want to convert the return value into a `String` or an integer."],["IntoConnectionInfo","Converts an object into a connection info struct.  This allows the constructor of the client to accept connection information in a range of different formats."],["PipelineCommands","Implements common redis commands for pipelines.  Unlike the regular commands trait, this returns the pipeline rather than a result directly.  Other than that it works the same however."],["ToRedisArgs","Used to convert a value into one or multiple redis argument strings.  Most values will produce exactly one item but in some cases it might make sense to produce more than one."]],"type":[["RedisResult","Library generic result type."]]});