import EnvironmentSettings from '@/pages/App/Settings/Environment';
import AppScriptSettings from '@/pages/App/Settings/Script';
import OpenApiSettings from '@/pages/App/Settings/OpenApiSetting';

const ApplicationSettings = () => {
  return (
    <>
      <EnvironmentSettings />
      <AppScriptSettings />
      <OpenApiSettings appId={''} />
    </>
  );
};

export default ApplicationSettings;