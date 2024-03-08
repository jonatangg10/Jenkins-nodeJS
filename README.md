<p align="center">¡ Bienvenido !</p>
<p align="center"><b>Ejemplo practico de Jenkins con nodeJS</b></p>
<p align="center"><a>Dessarrollo para un proceso integración continua</a></p>
<p align="center"><b>Si se puede inmaginar, se puede programar</b></p>
<hr>
<p align="center"><i>¡ Sigue los pasos en el archivo pasos.txt !</i></p>

SSHLauncher{host='192.168.101.100', port=22, credentialsId='jenkins', jvmOptions='', javaPath='', prefixStartSlaveCmd='', suffixStartSlaveCmd='', launchTimeoutSeconds=60, maxNumRetries=10, retryWaitTime=15, sshHostKeyVerificationStrategy=hudson.plugins.sshslaves.verifiers.ManuallyTrustedKeyVerificationStrategy, tcpNoDelay=true, trackCredentials=true}
[03/08/24 05:07:52] [SSH] abriendo una conexión SSH sobre 192.168.101.100:22.
[03/08/24 05:07:52] [SSH] SSH host key matches key seen previously for this host. Connection will be allowed.
ERROR: Server rejected the 1 private key(s) for jonatan (credentialId:jenkins/method:publickey)
ERROR: Failed to authenticate as jonatan with credential=jenkins
java.io.IOException: Publickey authentication failed.
	at com.trilead.ssh2.auth.AuthenticationManager.authenticatePublicKey(AuthenticationManager.java:349)
	at com.trilead.ssh2.Connection.authenticateWithPublicKey(Connection.java:472)
	at com.cloudbees.jenkins.plugins.sshcredentials.impl.TrileadSSHPublicKeyAuthenticator.doAuthenticate(TrileadSSHPublicKeyAuthenticator.java:110)
	at com.cloudbees.jenkins.plugins.sshcredentials.SSHAuthenticator.authenticate(SSHAuthenticator.java:431)
	at com.cloudbees.jenkins.plugins.sshcredentials.SSHAuthenticator.authenticate(SSHAuthenticator.java:468)
	at hudson.plugins.sshslaves.SSHLauncher.openConnection(SSHLauncher.java:882)
	at hudson.plugins.sshslaves.SSHLauncher.lambda$launch$0(SSHLauncher.java:441)
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)
	at java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)
	at java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)
	at java.base/java.lang.Thread.run(Thread.java:840)
Caused by: java.io.IOException: PEM problem: it is of unknown type. Supported algorithms are :[ssh-ed25519, ecdsa-sha2-nistp521, ecdsa-sha2-nistp384, ecdsa-sha2-nistp256, rsa-sha2-256, rsa-sha2-512, ssh-rsa, ssh-dss]
	at com.trilead.ssh2.crypto.PEMDecoder.decodeKeyPair(PEMDecoder.java:482)
	at com.trilead.ssh2.auth.AuthenticationManager.authenticatePublicKey(AuthenticationManager.java:290)
	... 10 more
[03/08/24 05:07:52] [SSH] Fallo en la autenticación.
Autenticación fallida
[03/08/24 05:07:52] Launch failed - cleaning up connection
[03/08/24 05:07:52] [SSH] Cerrada la conexión.
